import React, { Component } from "react";

import "../stylesheet/RecommendImage.scss";
import searchImg from "../image/search.png";

import axios from "axios";
class RecommendImage extends Component {
	state = {
		searchText: "",
		apiUrl: "https://pixabay.com/api",
		apikey: process.env.REACT_APP_API_KEY,
		images: [],
		tagText: "",
		amount: 24,
		lang: "ko",
		order: "popular",
	};

	componentDidMount() {
		axios
			.get(
				`${this.state.apiUrl}/?key=${this.state.apikey}&lang=${this.state.lang}&image_type=photo&per_page=${this.state.amount}&safesearch=true&order=${this.state.order}`
			)
			.then((res) => {
				this.setState({ images: res.data.hits });
			})
			.catch((err) => console.log(err));
	}

	SearchTagText = () => {
		axios
			.get(
				`${this.state.apiUrl}/?key=${this.state.apikey}&q=${this.state.tagText}&lang=${this.state.lang}&image_type=photo&per_page=${this.state.amount}&safesearch=true&order=${this.state.order}`
			)
			.then((res) => {
				this.setState({ images: res.data.hits });
			})
			.catch((err) => console.log(err));
	};

	Search = () => {
		axios
			.get(
				`${this.state.apiUrl}/?key=${this.state.apikey}&q=${this.state.searchText}&lang=${this.state.lang}&image_type=photo&per_page=${this.state.amount}&safesearch=true&order=${this.state.order}`
			)
			.then((res) => {
				this.setState({ images: res.data.hits });
			})
			.catch((err) => console.log(err));
	};

	ChangeSearchText = (e) => {
		const text = e.target.value;
		this.setState(
			() => ({
				searchText: text,
			}),
			() => {
				if (text === "") {
					axios
						.get(
							`${this.state.apiUrl}/?key=${this.state.apikey}&lang=${this.state.lang}&image_type=photo&per_page=${this.state.amount}&safesearch=true&order=${this.state.order}`
						)
						.then((res) => {
							this.setState({ images: res.data.hits });
						})
						.catch((err) => console.log(err));
				} else {
					axios
						.get(
							`${this.state.apiUrl}/?key=${this.state.apikey}&q=${this.state.searchText}&lang=${this.state.lang}&image_type=photo&per_page=${this.state.amount}&safesearch=true&order=${this.state.order}`
						)
						.then((res) => {
							this.setState({ images: res.data.hits });
						})
						.catch((err) => console.log(err));
				}
			}
		);
		console.log(this.state.images);
	};

	render() {
		return (
			<div className="ImgRecommendation">
				<div>
					<form className="SearchBox">
						<input type="text" placeholder="이미지 검색" onChange={this.ChangeSearchText} />
						<img src={searchImg} onClick={this.Search} />
					</form>
				</div>
				<div className="Tag">
					<span
						onClick={() => {
							this.setState({ tagText: "동물" }, () => {
								this.SearchTagText();
							});
						}}
						className="TagContent">
						#동물
					</span>
					<span
						onClick={() => {
							this.setState({ tagText: "식물" }, () => {
								this.SearchTagText();
							});
						}}
						className="TagContent">
						#식물
					</span>
					<span
						onClick={() => {
							this.setState({ tagText: "배경" }, () => {
								this.SearchTagText();
							});
						}}
						className="TagContent">
						#배경
					</span>
					<span
						onClick={() => {
							this.setState({ tagText: "귀여운" }, () => {
								this.SearchTagText();
							});
						}}
						className="TagContent">
						#귀여운
					</span>
					<span
						onClick={() => {
							this.setState({ tagText: "사람" }, () => {
								this.SearchTagText();
							});
						}}
						className="TagContent">
						#사람
					</span>
					<span
						onClick={() => {
							this.setState({ tagText: "여름" }, () => {
								this.SearchTagText();
							});
						}}
						className="TagContent">
						#여름
					</span>
					<span
						onClick={() => {
							this.setState({ tagText: "겨울" }, () => {
								this.SearchTagText();
							});
						}}
						className="TagContent">
						#겨울
					</span>
				</div>
				<div className="ImageArray">
					{this.state.images.map((img) => (
						<img id={img.id} src={img.previewURL} alt={img.tags} onClick={() => this.props.AddRecommendImage(img.largeImageURL)} />
					))}
				</div>
			</div>
		);
	}
}

export default RecommendImage;

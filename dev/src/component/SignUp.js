import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../stylesheet/Login.scss";

function SignUp() {
	const [id, setId] = useState("");
	const [pw, setPw] = useState("");
	const [pwCheck, setPwCheck] = useState("");
	const [name, setName] = useState("");
	const [nickname, setNickname] = useState("");
	let navigate = useNavigate();

	//const [idList, setidList] = useState([]);
	//const [idCheck, setIdCheck] = useState(false);
	const minLength = 8;
	const signUpURL = "http://carroteditor.ravit.co.kr:8000/user/signup";

	return (
		<div className="LoginDiv">
			<h1>회원가입</h1>
			<input
				placeholder="아이디"
				id="id"
				onChange={(e) => {
					setId(e.target.value);
				}}
			/>
			<br />
			<input
				type="password"
				placeholder="패스워드"
				id="password"
				onChange={(e) => {
					setPw(e.target.value);
				}}
			/>
			<br />
			<input
				type="password"
				placeholder="패스워드 확인"
				id="password"
				onChange={(e) => {
					setPwCheck(e.target.value);
				}}
			/>
			<br />
			<input
				placeholder="이름"
				id="username"
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<br />
			<input
				placeholder="닉네임"
				id="nickname"
				onChange={(e) => {
					setNickname(e.target.value);
				}}
			/>
			<br />
			<button
				className="Login"
				type="button"
				onClick={(e) => {
					e.stopPropagation();
					if (pw.length >= minLength) {
						if (pw == pwCheck) {
							axios
								.post(signUpURL, {
									password: pw,
									id: id,
									nickname: nickname,
									name: name,
								})
								.then((result) => {
									if (result.status === 201) {
										alert("회원가입이 완료되었습니다!");
										navigate("/");
									}
								})
								.catch((error) => {
									if (error.response.status === 409) {
										alert("이미 존재하는 아이디 입니다.");
									} else if (error.response.status === 400) {
										alert("모든 항목을 입력해주세요.");
									}
								});
						} else {
							alert("비밀번호가 일치하지 않습니다.");
						}
					} else {
						alert("비밀번호는 최소 8자 이상이어야 합니다.");
					}
				}}>
				회원가입
			</button>
		</div>
	);
}
export default SignUp;

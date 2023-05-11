import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "../stylesheet/Login.scss";

function Login(props) {
	let navigate = useNavigate();

	const loginURL = "http://carroteditor.ravit.co.kr:8000/user/login";

	return (
		<div className="LoginDiv">
			<h1>로그인</h1>
			<input
				placeholder="아이디"
				id="id"
				onChange={(e) => {
					props.setId(e.target.value);
				}}
			/>
			<br />
			<input
				type="password"
				placeholder="패스워드"
				id="password"
				onChange={(e) => {
					props.setPw(e.target.value);
				}}
			/>
			<br />
			<button
				className="Login"
				type="button"
				onClick={(e) => {
					e.stopPropagation();
					axios
						.post(loginURL, {
							password: props.pw,
							username: props.id,
						})
						.then((result) => {
							if (result.status === 200) {
								props.setIsLogin(true);
								localStorage.setItem("id", props.id);
								localStorage.setItem("pw", props.pw);
								navigate("/");
							}
						})
						.catch((error) => {
							if (error.response.status === 401) {
								alert("아이디와 비밀번호가 일치하지 않습니다.");
							} else if (error.response.status === 400) {
								alert("모든 항목을 입력해주세요.");
							}
						});
				}}>
				로그인
			</button>
			<div className="Question">
				아직 회원이 아니신가요?&nbsp;&nbsp;
				<span className="signUp">
					<Link to="/signup" style={{ color: "white" }}>
						회원가입
					</Link>
				</span>
			</div>
		</div>
	);
}
export default Login;

import "./App.css";
import googlePhoto from "./images/google.png";
import facebookPhoto from "./images/facebook.png";
import githubPhoto from "./images/github.png";
import app from "./firebase.init";
import {
	FacebookAuthProvider,
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
	const [user, setUser] = useState({});

	const handleGoogleAuth = () => {
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				setUser(user);
			})
			.catch((error) => {
				console.error(error);
				setUser({});
			});
	};

	const handleGithubAuth = () => {
		console.log("Clicked");
		const githubProvider = new GithubAuthProvider();
		signInWithPopup(auth, githubProvider)
			.then((result) => {
				console.log("sob thik ache re...");
				const user = result.user;
				setUser(user);
			})
			.catch((error) => {
				console.error(error);
				setUser({});
			});
	};

	const handleFacebookAuth = () => {
		const providerFacebook = new FacebookAuthProvider();
		signInWithPopup(auth, providerFacebook)
			.then((result) => {
				const user = result.user;
				setUser(user);
			})
			.catch((error) => {
				console.error(error);
				setUser({});
			});
	};

	return (
		<div className="App">
			<div className="sign-up-area">
				<div className="signUp-buttons">
					<button onClick={handleGoogleAuth}>
						<img src={googlePhoto} alt="" /> <span>Google Log In</span>
					</button>
					<button onClick={handleFacebookAuth}>
						<img src={facebookPhoto} alt="" />{" "}
						<span>Faceboon Log In</span>
					</button>
					<button onClick={handleGithubAuth}>
						<img src={githubPhoto} alt="" /> <span>Github Log In</span>
					</button>
				</div>
				<span>Or</span>
				<div className="signUp-form">
					<h2>Register</h2>
					<hr />
					<form action="" className="sign-up-form">
						<div className="form-control">
							<label htmlFor="full-name">Full Name:</label>
							<input type="text" placeholder="Full Name" />
						</div>
						<div className="form-control">
							<label htmlFor="email">E-mail Address:</label>
							<input type="email" placeholder="E-mail Address" />
						</div>
						<div className="form-control">
							<label htmlFor="password">Password:</label>
							<input type="password" placeholder="Password" />
						</div>
						<div className="form-control">
							<label htmlFor="con-password">Confirm Password:</label>
							<input type="password" placeholder="Confirm Password" />
						</div>
						<input
							className="details-btn"
							type="submit"
							value="Register"
						/>
						<div>
							<p>
								All ready registred?<a href="/">Log in</a>
							</p>
						</div>
					</form>
				</div>
			</div>
			{user.uid && (
				<div className="user-details-area">
					<div className="user-photo">
						<img src={user.photoURL} alt="" />
					</div>
					<div className="user-details">
						<h2>Name: {user.displayName}</h2>
						<p>E-mail: {user.email}</p>
						<button className="details-btn">More Details</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;

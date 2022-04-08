import "./App.css";
import app from "./firebase.init";
import {
	FacebookAuthProvider,
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";

const auth = getAuth(app);

function App() {
	const provider = new GoogleAuthProvider();
	const providerFacebook = new FacebookAuthProvider();

	const handleGoogleAuth = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => console.error(error));
	};

	const handleFacebookAuth = () => {
		// signInWithPopup(auth, providerFacebook)
		// 	.then((result) => {
		// 		const user = result.user;
		// 		console.log(user);
		// 	})
		// 	.catch((error) => console.error(error));
	};

	return (
		<div className="App">
			<div className="signUp-buttons">
				<button onClick={handleGoogleAuth}>Google Log In</button>
				<button onClick={handleFacebookAuth}>Faceboon Log In</button>
			</div>
			<span>Or</span>
			<div className="signUp-form">
				<h2>Register</h2>
				<hr />
			</div>
		</div>
	);
}

export default App;

import "./App.css";
import app from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

function App() {
	const provider = new GoogleAuthProvider();

	const handleGoogleAuth = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="App">
			<button onClick={handleGoogleAuth}>Google</button>
		</div>
	);
}

export default App;

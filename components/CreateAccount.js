export default function CreateAccount() {
  const newAccount = async () => {
    const data = await fetch(`http://localhost:3000/api/createAccount`);

    const res = await data.json();
  };
}

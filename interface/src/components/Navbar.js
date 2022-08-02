import "./Navbar.css";

export default function Navbar() {
    return(
        <div>
            <a href="/">Home</a>
            <a href="/edit/:id">Edit</a>
            <a href="/car">Create Car</a>
            <a href="/user">Create User</a>
        </div>
    );
}
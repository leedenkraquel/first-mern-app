import "./Navbar.css";

export default function Navbar() {
    return(
        <div>
            <a href="/first-mern-app/">Home</a>
            <a href="/first-mern-app/edit/:id">Edit</a>
            <a href="/first-mern-app/car">Create Car</a>
            <a href="/first-mern-app/user">Create User</a>
        </div>
    );
}
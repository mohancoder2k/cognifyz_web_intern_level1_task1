import React from 'react';
import "./App.css";
import pic from './pic.png'


const Home = () => {
  return (
    <div className="container">
     
      <h2>Welcome to Cognifyz Technologies</h2>
     
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia commodi aliquam sequi distinctio at, magni explicabo autem id amet ad fugit, delectus velit cum ipsum unde sed, consequuntur aut.
        Sit commodi, fuga rerum amet quaerat atque in doloremque? Culpa tempore fuga ullam non, facere rem ducimus veniam voluptatem nam atque debitis reprehenderit architecto officia quod accusamus molestias adipisci? Quod.
        Quod voluptates laboriosam cum eum, expedita eius, dolorem natus quam nihil impedit blanditiis sapiente in voluptatibus soluta. Obcaecati incidunt labore nihil repudiandae iusto eligendi tenetur iste, suscipit, provident unde quos.
        Non ut explicabo omnis nesciunt quibusdam. 
      </p>
  
      <form>
        <p>Welcome</p>
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <input type="button" value="Sign in" /><br />
        <a href="https://cognifyz.com/">Forgot Password?</a>
      </form>
      <img src={pic} alt='logo' />

    </div>
  );
};

export default Home;

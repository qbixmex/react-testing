const Register = () => {
  return (
    <>
      <hgroup>
        <h1>Form Component</h1>
        <h2>Fill the form to register</h2>
      </hgroup>

      <p>All fields are mandatory</p>

      <img src="images/profile.jpg" alt="User Facebook profile" />

      <form>

        <section>
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" />
        </section>

        <section>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" />
        </section>

        <section>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="johndoe@somedomain.com" />
        </section>

        <section>
          <h2>Write your biography here:</h2>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" rows={10}></textarea>
        </section>

        <section>
          <label htmlFor="job_location">Job Location</label>
          <select id="job_location" name="job_location">
            <option disabled>Select a country</option>
            <option value="US">United States</option>
            <option value="MX">Mexico</option>
            <option value="CA">Canada</option>
          </select>
        </section>

        <section>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value="0"
            onChange={() => {}}
          />
        </section>

        <section>
          <label>
            <input type="checkbox" name="terms" id="terms" />
            I agree to the terms and conditions
          </label>

          <p data-testid="policy-regulation-message">Read Policy and Regulations:</p>
          <a href="/policy" title="Read Policies and regulations">Policy</a>
        </section>

        <section>
          <button type="submit">Send</button>
        </section>

      </form>
    </>
  )
};

export default Register;

import React, { useEffect, useState } from 'react';
import { getHomeData } from '../services/ApiService'; // Import your API service
import userManager from '../config/OidcConfig'; // Import your OIDC config

const HomePage = () => {
  const [user, setUser] = useState(null); // State to store user information
  const [homeData, setHomeData] = useState(null); // State to store home data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = await userManager.getUser(); // Fetch the current user
        setUser(currentUser); // Set the user state
      } catch (err) {
        console.error('Error fetching user:', err);
        setError(err);
      }
    };

    const fetchHomeData = async () => {
      try {
        const data = await getHomeData(); // Fetch home data from the API
        setHomeData(data); // Set the home data state
      } catch (err) {
        console.error('Error fetching home data:', err);
        setError(err);
      } finally {
        setLoading(false); // Set loading to false after data fetching is complete
      }
    };

    fetchUserData(); // Fetch user data
    fetchHomeData(); // Fetch home data
  }, []);

  // Render loading state, error state, or fetched user data
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {user ? ( // Check if user data exists
        <>
          <h1>Welcome, {user.profile.preferred_username}</h1>
        </>
      ) : (
        <h1>Please log in to see your profile</h1>
      )}
      {
       <p>this from resource server : {homeData}</p>
      }
    </div>
  );
};

export default HomePage;

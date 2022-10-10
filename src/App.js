import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { ProfilesPage } from './components/ProfilesPage';

function App() {
  const baseURL = `https://randomuser.me/api`;
  const [profiles, setProfiles] = useState([]);
  const [singleProfile, setSingleProfile] = useState([]);

  const showProfiles = useCallback(() => {
    axios.get(baseURL).then((response) => {
      setProfiles(response.data.results);
    });
  }, [baseURL]);

  const showProfile = useCallback(() => {
    axios.get(baseURL)
      .then((response) => {
      setSingleProfile(response.data.results);
      })
      .catch(error => console.error(error))
  }, [baseURL])

  useEffect(() => {
    showProfiles();
    showProfile();
  }, [showProfiles, showProfile]);

  const deleteProfile = (profileId) => {
    setProfiles(prevState => prevState.filter(profile => profile.id.value !== profileId))
  }

  const addProfile = () => {
    showProfile();
    setProfiles(prevState => [...prevState, ...singleProfile]);
  }

  const handleSortByAge = () => {
    const profilesSortedByAge = profiles.slice().sort((a, b) => {
      if (a.dob.age > b.dob.age) {
        return 1;
      } else {
        return -1;
      }
    })
    setProfiles(profilesSortedByAge);
  }

  const handleSortByLastName = () => {
    const profilesSortedByLastName = profiles.slice().sort((a, b) => {
      if (a.name.last > b.name.last) {
        return 1;
      } else {
        return -1;
      }
    })
    setProfiles(profilesSortedByLastName);
  }

  if (!profiles) return null;

  return (
    <div className="App">
      <ProfilesPage
        profiles={profiles}
        showProfiles={showProfiles}
        deleteProfile={deleteProfile}
        addProfile={addProfile}
        setProfiles={setProfiles}
        handleSortByAge={handleSortByAge}
        handleSortByLastName={handleSortByLastName}
      />
    </div>
  );
}

export default App;

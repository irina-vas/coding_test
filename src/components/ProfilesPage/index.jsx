import React from 'react';
import { Button } from '../Button';
import { Profile } from '../Profile';
import { Text } from '../Text';

export const ProfilesPage = ({
  profiles,
  deleteProfile,
  addProfile,
  handleSortByLastName,
  handleSortByAge
}) => {

  const NoProfiles = () => {
    return (
      <Text tag='h2' weight='extraBold' fontSize='large' style={{ textAlign: 'center', color: '#fff', marginTop: '70px' }}>
        There are no profiles
      </Text>
    )
  }

  return (
    <div className="profilesPage">
      <Text weight="extraBold" fontSize="extraLarge" tag="h1" textColor="mediumBlue">
        You can add no more than 6 profiles.<br/> Just click the button below.
      </Text>
      <div className="profilesPage__buttons">
        <Button onClick={addProfile} disabled={profiles.length >= 6}>
          <Text weight="bold" fontSize="large" textColor="darkBlue" tag="span">
            Add New Profile
          </Text>
        </Button>
        {profiles.length >= 6 &&
          <Text fontSize="small" weigth="light" textColor="mediumBlue" tag="p" className="warning">
            You can add no more than 6 profiles
          </Text>
        }
        <div className="profilesPage__buttons-filters">
          <Text tag="p" weight="regular" textColor="white" fontSize="medium">Filter By:</Text>
          <Button onClick={() => handleSortByAge()}>
            <Text weight="bold" fontSize="large" textColor="darkBlue" tag="span">
              Age
            </Text>
          </Button>
          <Button onClick={() => handleSortByLastName()}>
            <Text weight="bold" fontSize="large" textColor="darkBlue" tag="span">
              Last Name
            </Text>
          </Button>
        </div>
      </div>
      <div className='profilesPage__profiles'>
        {profiles.length > 0
          ? <Profile
              profiles={profiles}
              deleteProfile={deleteProfile}
            />
          : <NoProfiles />
        }
      </div>
    </div>
  );
};

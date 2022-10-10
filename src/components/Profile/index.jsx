import React from 'react';
import { Text } from '../Text';

export const Profile = ({ profiles, deleteProfile }) => {
  if (!profiles) return (
    <Text tag='h2' weight='extraBold' fontSize='large' style={{ textAlign: 'center', color: '#fff', marginTop: '70px' }}>
      There are no profiles
    </Text>
  )
  return (
    <div className="profile__wrapper">
      {profiles.map((profile, index, arr) => (
        <div key={index}  className='profile'>
          <span className='profile__closeBtn' onClick={()=> deleteProfile(profile.id.value)}>&#x2715;</span>
          <figure className='profile__photo'>
            <img src={profile.picture.large} alt={profile.name.last} />
          </figure>
          <div className='profile__description'>
            <Text weight='extraBold' tag='h3' fontSize='large'>
              {profile.name.title}{` `}
              {profile.name.first}{` `}
              {profile.name.last}
            </Text>
            <Text weight='regular' tag='p' fontSize='medium'>
              Gender: {profile.gender}
            </Text>
            <Text weight='regular' tag='p' fontSize='medium'>
              Age: {profile.dob.age}
            </Text>
            <Text weight='regular' tag='p' fontSize='small'>
              Location: {` `}
              {profile.location.street.number}{`, `}
              {profile.location.street.name}{` str., `}
              {profile.location.city}{`, `}
              {profile.location.country}
            </Text>
            <Text weight='regular' tag='p' fontSize='small'>
              Email: {profile.email}
            </Text>
            <Text weight='regular' tag='p' fontSize='small'>
              Tel: {profile.phone}
            </Text>
          </div>
        </div>
      ))}
    </div>
  )
};

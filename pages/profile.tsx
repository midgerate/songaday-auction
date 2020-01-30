import React, { useCallback } from 'react';
import useUpdateProfileMutation from '../lib/mutators/useUpdateProfileMutation';
import useRequireToken from '../lib/useRequireToken';
import useProfile from '../lib/queries/useProfile';
import useLogoutMutation from '../lib/mutators/useLogoutMutation';
import useCollectSongMutation from '../lib/mutators/useCollectSongMutation';
import getInitialProps from '../lib/getInitialProps/getInitialProps';
import requireUser from '../lib/getInitialProps/requireUser';

function Profile() {
  useRequireToken();
  const logoutMutation = useLogoutMutation();
  const collectSongMutation = useCollectSongMutation();

  const { data, error, isValidating } = useProfile();
  const updateProfile = useUpdateProfileMutation();

  const handleClick = useCallback(() => updateProfile('matt'), [updateProfile]);
  const clearName = useCallback(() => updateProfile(null), [updateProfile]);
  const collectSong = useCallback(() => collectSongMutation('1'), [collectSongMutation]);

  return (
    <div className="flex flex-col">
      <p>{isValidating ? '' : '(not) '}loading</p>
      <p>i am {data && data.email}</p>
      <p>my display name (remote): {data && data.displayName}</p>
      <p>error? {JSON.stringify(error)}</p>
      <button onClick={handleClick}>update to new</button>
      <button onClick={clearName}>clear name</button>
      <button onClick={collectSong}>collect song</button>
      <button onClick={logoutMutation}>signout</button>
    </div>
  );
}

Profile.getInitialProps = getInitialProps(async ctx => {
  await requireUser(ctx);

  return {};
});

export default Profile;

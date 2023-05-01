import useAuth from '../../Providers/useAuth';
import { FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import { Typography, Paper, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(() => ({
  padding: '2rem',
  borderRadius: '0.5rem',
}));

const StyledAvatar = styled(Avatar)(() => ({
  backgroundColor: 'gray',
  marginRight: '1rem',
}));

const UserInfo = () => {
  const { user } = useAuth();

  return (
    <StyledPaper elevation={4}>
      <Typography variant="h4" component="h2" gutterBottom>
        User Info
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Grid container alignItems="center">
            <StyledAvatar>
              <FaUser />
            </StyledAvatar>
            <div>
              <Typography variant="h6">
                {user ? `${user.userFirstName} ${user.userLastName}` : 'Unknown'}
              </Typography>
              <Typography variant="body2">
                {user ? user.userEmail : 'Unknown'}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container alignItems="center">
            <StyledAvatar>
              <FaMapMarkerAlt />
            </StyledAvatar>
            <div>
              <Typography variant="h6">Address</Typography>
              <Typography variant="body2">
                {user ? user.userAddress : 'Unknown'}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <strong>Username:</strong> {user ? user.userName : 'Unknown'}
          </Typography>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default UserInfo;
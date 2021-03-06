import { Typography } from '@material-ui/core'
import React from 'react'
import { Fragment } from 'react'
import { FaEnvelope, FaMapMarkerAlt,  FaPhone, } from 'react-icons/fa'
import StarRating from './StarRating'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import MuiLink from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import {dayjs} from 'dayjs'

import {connect} from 'react-redux'
import { CalendarViewDayRounded, LinkRounded, LocationOnRounded } from '@material-ui/icons'

const styles = (theme)=>({
    paper:{
        paddind: 20
    },
    profile: {
        '& .image-wrapper':{
            textAlign:'center',
            position:'relative',
            '& button':{
                position:'absolute',
                top:'80%',
                left:'70%',
                marginLeft:'auto',
                marginRight:'auto',
            }
        },
        '& .profile-image':{
          width:200,
          height:200,
          objectFit:'cover',
          maxwidth:'100%',
          borderRadius:'50%'
        },
        '& .profile-details':{
            textAlign:'center',
            '& span, svg':{
                verticalAlign:'middle'
            },
            '& a':{
                color: theme.palette.primary.main
            },
            '& hr':{
                border:'none',
                margin: '0 0 10px 0'
            },
            '& svg.button':{
                '&:hover':{
                    cursor:'pointer'
                }
            }

        },
        buttons:{
            textAlign:'center',
            '& a': {
                margin:'20px 10px'
            }
        }
    }
})

const Profile = ({classes,user: {credentials: {handle,createdAt,imageUrl,bio,website,location},loading,authenticated}}) => {
    
    let profileMarkup = !loading ? (authenticated ? (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
               <div className="image-wrapper">
                   <img src={imageUrl} alt="profile" className="profile-image"/>
               </div>
               <hr/>
               <div className="profile-details">
                   <MuiLink component={Link} to={`/users/${handle}`} color='primary' variant="h5">
                       @{handle}
                   </MuiLink>
                   <hr/>
                   {bio && <Typography variant="body2">{bio}</Typography>}
                   <hr/>
                   {location && (
                       <Fragment>
                           <LocationOnRounded color="primary"/> <span>{location}</span>
                           <hr/>
                       </Fragment>
                   )}
                   {website && (
                       <Fragment>
                           <LinkRounded color="primary"/>
                           <a href={website} target="_blank" rel="noopener noreferrer">
                               {' '}{website}
                           </a>
                       </Fragment>
                   )}
                   <CalendarViewDayRounded color="primary"/>{' '}
                   <span>Joined {dayjs(createdAt).format('MMMM YYYY')}</span>J
               </div>
            </div>
        </Paper>
    ) : (
        <Paper className={classes.paper}>
            <Typography variant="body2" align="center">
                No profile found, please login again
            </Typography>
            <div className={classes.buttons}>
                <Button variant="contained" color="primary" component={Link} to="/login">
                    Login
                    </Button>
                    <Button variant="contained" color="secondary" component={Link} to="/signup">
                    Signup
                    </Button>
            </div>
        </Paper>
    )) : (<p>loading...</p>)

    return profileMarkup;
}

const mapStateToProps = (state) => ({
    user: state.user,
})

Profile.PropTypes = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withStyles(styles)(Profile))

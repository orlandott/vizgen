import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Divider from '@material-ui/core/Divider';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Bar1 from '../images/bar1.png'
import Wood from '../backgrounds/Wood.jpg'
import Wheel from '../backgrounds/Wheel.jpg'
import Palms from '../backgrounds/Palms.jpg'
import Leaves from '../backgrounds/Leaves.jpg'
import ImSoInsta from '../backgrounds/ImSoInsta.jpg'
import Greeny from '../backgrounds/Greeny.jpg'
import Flowers from '../backgrounds/flowers.jpg'
import Bluepainting from '../backgrounds/bluepainting.jpg'
import Roses from '../backgrounds/roses.jpg'
import Tulips from '../backgrounds/tulips.jpg'
import Tulips2 from '../backgrounds/tulips2.jpg'
import Artboost1 from '../backgrounds/Artboost1.jpg'
import Releasecolor1 from '../backgrounds/releasecolor1.jpg'
import Releasecolor2 from '../backgrounds/releasecolor2.jpg'
import Artboost from '../backgrounds/Artboost.jpg'
import Artboost2 from '../backgrounds/Artboost2.jpg'
import Carlsberg from '../images/carlsberg.svg'
import Eighteen from '../images/18.svg'
import Bottle from '../images/bottle3.png'
import html2canvas from 'html2canvas';
import ArrowRight from '@material-ui/icons/ArrowForwardIos';
import ArrowLeft from '@material-ui/icons/ArrowBackIos';
import '../fonts/carlsberg.ttf'

export default class MainPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            patterns : [

                {
                    name: "None",
                    svg : '22222222222222222222222222222222222222222222222222222222222222222222'
                },
                {
                    name: "Lines",
                    svg : "data:image/svg+xml,%3Csvg fill='%239C92AC' width='80' height='80' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg  fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E"
                },
                {
                    name: "Circle",
                    svg : "data:image/svg+xml,%3Csvg fill='%239C92AC' width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'  fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E"
                },
                {
                    name: "Square",
                    svg : "data:image/svg+xml,%3Csvg fill='%239C92AC' xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 8 8'%3E%3Cg  fill-opacity='0.43'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E"
                },
                {
                    name: "Hexagon",
                    svg : "data:image/svg+xml,%3Csvg fill='%239C92AC' xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                },
                {
                    name: "Rain",
                    svg : "data:image/svg+xml,%3Csvg fill='%239C92AC' width='12' height='24' viewBox='0 0 12 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg  fill-opacity='0.4'%3E%3Cpath d='M2 0h2v12H2V0zm1 20c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM9 8c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-1 4h2v12H8V12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                },
                {
                    name: "Jupiter",
                    svg : "data:image/svg+xml,%3Csvg fill='%239C92AC' xmlns='http://www.w3.org/2000/svg' width='52' height='52' viewBox='0 0 52 52'%3E%3Cpath  fill-opacity='0.4' d='M0 17.83V0h17.83a3 3 0 0 1-5.66 2H5.9A5 5 0 0 1 2 5.9v6.27a3 3 0 0 1-2 5.66zm0 18.34a3 3 0 0 1 2 5.66v6.27A5 5 0 0 1 5.9 52h6.27a3 3 0 0 1 5.66 0H0V36.17zM36.17 52a3 3 0 0 1 5.66 0h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 0 1 0-5.66V52H36.17zM0 31.93v-9.78a5 5 0 0 1 3.8.72l4.43-4.43a3 3 0 1 1 1.42 1.41L5.2 24.28a5 5 0 0 1 0 5.52l4.44 4.43a3 3 0 1 1-1.42 1.42L3.8 31.2a5 5 0 0 1-3.8.72zm52-14.1a3 3 0 0 1 0-5.66V5.9A5 5 0 0 1 48.1 2h-6.27a3 3 0 0 1-5.66-2H52v17.83zm0 14.1a4.97 4.97 0 0 1-1.72-.72l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1 0-5.52l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43c.53-.35 1.12-.6 1.72-.72v9.78zM22.15 0h9.78a5 5 0 0 1-.72 3.8l4.44 4.43a3 3 0 1 1-1.42 1.42L29.8 5.2a5 5 0 0 1-5.52 0l-4.43 4.44a3 3 0 1 1-1.41-1.42l4.43-4.43a5 5 0 0 1-.72-3.8zm0 52c.13-.6.37-1.19.72-1.72l-4.43-4.43a3 3 0 1 1 1.41-1.41l4.43 4.43a5 5 0 0 1 5.52 0l4.43-4.43a3 3 0 1 1 1.42 1.41l-4.44 4.43c.36.53.6 1.12.72 1.72h-9.78zm9.75-24a5 5 0 0 1-3.9 3.9v6.27a3 3 0 1 1-2 0V31.9a5 5 0 0 1-3.9-3.9h-6.27a3 3 0 1 1 0-2h6.27a5 5 0 0 1 3.9-3.9v-6.27a3 3 0 1 1 2 0v6.27a5 5 0 0 1 3.9 3.9h6.27a3 3 0 1 1 0 2H31.9z'%3E%3C/path%3E%3C/svg%3E"
                },
            ],
            patternSelected : '',
            tab : '0',
            labelColor: '#90ee90',
            backgroundRadio: 'color',
            backgroundColor: '#5555',
            backgroundVerticalAllignment :'0',
            backgroundhorizontalAllignment :'0',
            backgroundZoom :'1',
            secondaryBackgroundColor: '#ff0000',
            globalTextColor:'#FFFFFF',
            secondaryTextColor: '#FFA500',
            legendBitterness: '2',
            legendColor : '2',
            legendStrength: '2',
            beerNameTitle: '',
            beerNameColor: '#FFF',
            brewerNameTitle:'',
            brewerNameColor: '#FFF',
            craftedDescriptionText: 'crafted by',
            craftedDescriptionColor: '#FFF',
            beerNameFontSize: '35',
            beerNameVerticalAllignment: '50',
            brewerNameFontSize: '20',
            brewerNameVerticalAllignment : '50',
            beerNameLogoVerticalAllignment : '0',
            colors : [
                {name: 'Predefined',
                hex: '#E61B30'
                },
                {name: 'Red Dark',
                hex: "#EB5B65"
                },
                {name: 'Red Light',
                hex: "#ffcccb"
                },
                {name: 'Blue Dark',
                hex: "#3670BA"
                },
                {name: 'Blue Light',
                hex: "#47A7DF"
                },
                {name: 'Green Dark',
                hex: "#20A951"
                },
                {name: 'Green Light',
                hex: "#3AB873"
                },
                {name: 'Orange',
                hex: "#EA5C35"
                },
                {name: 'Yellow',
                hex: "#F5B348"
                },
                {name: 'Purple Dark',
                hex: "#672190"
            },
            {name: 'Purple Light',
                hex: "#9465B0"
                },
                {name: 'Pink Dark',
                hex: "#E6008E"
                },
                {name: 'Pink Light',
                hex: "#F27FC7 "
                },
                {name: 'Black',
                hex: "#000000"
                },
                {name: 'Grey',
                hex: "#A7A9AC"
                },
                {name: 'White',
                hex: "#FFFFFF"
                }
            ],
            patternColor : '#9C92AC',
            rightBottomVerticalAllignment : '0',
            background: 'color',
            rightSideBackground:'solid',
            rightSideBackgroundColor: '#90ee90',
            rightSideBackgroundHex: '',
            rightTextTitle: '',
            patternHex:'',
            backgroundImage: '',
            customImage: '',
            textTitleFontSize : '1.2vh',
            textTitleHorizontalAllignment :'4',
            textTitleColor : "#FFFFFF",
            images:[
                {
                    name: "Custom",
                    src: "",
                },
                {
                    name: "Wood",
                    src: Wood,
                },
                {
                    name: "Wheel",
                    src: Wheel,
                },
                {
                    name: "Palms",
                    src: Palms,
                },
                {
                    name: "Leaves",
                    src: Leaves,
                },
                {
                    name: "I'm So Insta",
                    src: ImSoInsta,
                },
                {
                    name: "Greeny",
                    src: Greeny,
                },
                {
                    name: "Flowers",
                    src: Flowers,
                },
                {
                    name: "Blue Painting",
                    src: Bluepainting,
                },
                {
                    name: "Roses",
                    src: Roses,
                },
                {
                    name: "Tulips",
                    src: Tulips,
                },
                {
                    name: "Tulips 2",
                    src: Tulips2,
                },
                {
                    name: "Artboost-Jesper Jwls",
                    src: Artboost1,
                },
                {
                    name: "Release the Colors 1",
                    src: Releasecolor1,
                },
                {
                    name: "Release the Colors 2",
                    src: Releasecolor2,
                },
                {
                    name: "Artboost-Ruth Crone Foster",
                    src: Artboost,
                },
                {
                    name: "Artboost-Matia Toro",
                    src: Artboost2,
                }
            ],
            overlaySlider : 0,
            verticalAllignment: 0,
            horizontalAllignment:0,
            zoomlevel:0,
            lableLanguage:"english",
            beerName: "text",
            brewerName:"text",
            rightText:"1",
            previewRotation: 0,
    }};
    Copyright = ()=> {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
      renderBottleImage = () => {

      }

      html2Canvas = () => {
        html2canvas(document.querySelector("#fullLable"), {
            scrollX: 0,
            scrollY: 0,
            allowTaint : true
          }).then(canvas => {
            console.log(canvas)
            var data = canvas.toDataURL('../images/png', 0.9);
            let src = encodeURI(data);
            this.setState({
                ...this.state,
                fullImage: src,
            });
        });
      }
      handleTabChange = (event, newValue) => {
          if(newValue==='1') {
               this.html2Canvas();
               this.setState({
                ...this.state,
                tab : newValue,
               })
            }
            else
            this.setState({
                ...this.state,
                tab : newValue,
            });
        }
      handleChange = name => event => {
        if(name==="patternColor")
        {
            let obj=[];
            let {patternSelected} = this.state;
            patternSelected = patternSelected.replace(this.state.patternColor.substring(1,7), event.target.value.substring(1,7))
            this.state.patterns.map( pattern => {
                let naam = pattern.name;
                let str = pattern.svg.replace(this.state.patternColor.substring(1,7), event.target.value.substring(1,7))
                console.log(this.state.patternColor.substring(1,7) + " _____ "+ event.target.value.substring(1,7));
                obj.push({
                    name: naam,
                    svg: str,
                })
            }
           )
           this.setState ({
               ...this.state,
            patterns : obj,
            [name]: event.target.value,
            patternSelected
        }, () => {
            this.html2Canvas();
        })
        console.log(this.state.patterns)
        }
        else{
            this.setState({
            ...this.state,
            [name]: event.target.value,
            }, () => {
                this.html2Canvas();
            });
        }
        if (name==="backgroundRadio" && event.target.value==="background") {
            this.setState({
                rightSideBackground: "transparent",
                labelColor : "#FFFFFF",
                globalTextColor : "#000000",
                craftedDescriptionColor: "#000000",
            }, () => {
                this.html2Canvas();
            })
        }
        if(name==="globalTextColor"){
            this.setState({
                craftedDescriptionColor : event.target.value,
                beerNameColor : event.target.value,
                brewerNameColor : event.target.value,
                textTitleColor : event.target.value,
                rightTextColor : event.target.value,
                rightBottomTextColor : event.target.value,

            }, () => {
                this.html2Canvas();
            }) }
        console.log(this.state.overlaySlider)
      };

      rotateBottle = direction => {
        let newRotation;
        if(direction == 'right') {
            newRotation = this.state.previewRotation + 10;
        }
        else {
            newRotation = this.state.previewRotation - 10;
        }

        if(newRotation >= 360){
            newRotation =- 360;
        }

        this.setState({
            previewRotation: newRotation,
        })
      }

      bottleView = view => {
          let newView;
          if(view == 'left')
           newView = 310

          if(view == 'front')
          newView = 191

          if(view =='right')
          newView = 95

          this.setState({
              previewRotation: newView
          })
      }

      handleImageChange  = name => e =>{

          let reader = new FileReader();
          let file = e.target.files[0];

          reader.onloadend = () => {
              let {images} = this.state;
              images[0].src = reader.result;
            this.setState({
              file: file,
              backgroundImage: reader.result,
              images,
            }, () => {
                this.html2Canvas();
            });
          }

          reader.readAsDataURL(file)
        }
        handleBeerLogo  = name => e =>{

            let reader = new FileReader();
            let file = e.target.files[0];

            reader.onloadend = () => {
              this.setState({
                file: file,
                beerLogoImage: reader.result,
              }, () => {
                this.html2Canvas();
            });
            }

            reader.readAsDataURL(file)
          }
          handleBrewerLogo  = name => e =>{

            let reader = new FileReader();
            let file = e.target.files[0];

            reader.onloadend = () => {
              this.setState({
                file: file,
                brewerNameLogoImage: reader.result,
              }, () => {
                this.html2Canvas();
            });
            }

            reader.readAsDataURL(file)
          }
      handleSliderChange = name => (event, newValue) => {
        this.setState({
            ...this.state,
            [name]: newValue
          }, () => {
            this.html2Canvas();
        });
      };

      handleRenderOnServer =() => {
          console.log(this.state.labelColor)
      }
      randomizeColors =() => {
        var min = 0;
        var max = 9;
        var rand1 =  parseInt(min + (Math.random() * (15-0)));
        var rand2 =  parseInt(min + (Math.random() * (15-0)));
        var rand3 =  parseInt(min + (Math.random() * (15-0)));
        var rand4 =  parseInt(min + (Math.random() * (6-0)));
        this.setState({
            rightSideBackground : 'transparent',
            labelColor : this.state.colors[rand1].hex,
            backgroundColor: this.state.colors[rand2].hex,
            patternColor: this.state.colors[rand3].hex,
            patternSelected : this.state.patterns[rand4].svg
        }, () => {
            this.html2Canvas();
        })
      }

    render() {
        const classes =this.props;
        const labelColor = this.state.labelColor;
   return (

<PageStyler>
    <Grid container component="main" className="root full-page">
      <Grid  component={Paper} className="forty" square>
        <Paper style={{position: "sticky",top: 0}} square>
            <Tabs
                variant="fullWidth"
                value={this.state.tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handleTabChange}
                aria-label="disabled tabs example"
            >
                <Tab value="0" label="Edit View"  />
                <Tab value="1" label="Preview Bottle" />
            </Tabs>
            <div id="fullLable" className="rectangle" style={

                {
                    position: "absolute",
                    backgroundColor : `${this.state.labelColor}`,
                    display:`${this.state.tab === "0" ? "block" : "block"}`

                } }>
                <div className="legend">
                    <div className ="bitterness">
                        <p style={{position:'absolute', paddingLeft:"12px", top : '3px',fontWeight: "500",  fontSize : "1.5vh",  color : `${this.state.globalTextColor}`}}>BITTERNESS</p>
                        {this.state.legendBitterness>='1' &&
                        <p className="dot" style={{backgroundColor: `${this.state.globalTextColor}`}}></p>
                        }
                        {this.state.legendBitterness>='2' &&
                        <p className="dot" style={{marginLeft: "6px",backgroundColor: `${this.state.globalTextColor}`}}></p>
                        }
                        {this.state.legendBitterness>='3' &&
                        <p className="dot" style={{marginLeft: "6px",backgroundColor: `${this.state.globalTextColor}`}}></p>
                        }
                        {this.state.legendBitterness>='4' &&
                        <p className="dot" style={{marginLeft: "6px",backgroundColor: `${this.state.globalTextColor}`}}></p>
                        }

                    </div>
                    <div className ="color">
                        <p style={{position:'absolute', paddingLeft:"12px", top : '3px',fontWeight: "500",  fontSize : "1.5vh",  color : `${this.state.globalTextColor}`}}>COLOR</p>
                        {this.state.legendColor>='1' &&
                        <p className="dot" style={{backgroundColor: `${this.state.globalTextColor}`}}></p>
                        }
                        {this.state.legendColor>='2' &&
                        <p className="dot" style={{marginLeft: "6px",backgroundColor: `${this.state.globalTextColor}`}}></p>
                        }
                        {this.state.legendColor>='3' &&
                        <p className="dot" style={{marginLeft: "6px",backgroundColor: `${this.state.globalTextColor}`}}></p>
                        }
                    </div>
                    <div className ="strength">
                        <p style={{position:'absolute', paddingLeft:"12px", top : '3px',fontWeight: "500",  fontSize : "1.5vh",  color : `${this.state.globalTextColor}`}}>STRENGTH</p>
                        {this.state.legendStrength>='1' &&
                        <p className="dot" style={{backgroundColor: `${this.state.globalTextColor}`}}></p>
                        }
                        {this.state.legendStrength>='2' &&
                        <p className="dot" style={{marginLeft: "6px",backgroundColor: `${this.state.globalTextColor}`}}></p>
                        }
                        {this.state.legendStrength>='3' &&
                        <p className="dot" style={{marginLeft: "6px",backgroundColor: `${this.state.globalTextColor}`}}></p>
                        }
                    </div>
                </div>
                {this.state.backgroundRadio === "background"?
                    <div className="pictureBackground" style={{backgroundColor: '#000',overflow:'hidden', width:'70%', height : '100%'}}>
                        <img src={this.state.backgroundImage} style={{position:"absolute",width: '100%', height: '100%', filter: `grayscale(${this.state.overlaySlider}%)`, marginTop:`${this.state.backgroundVerticalAllignment*4}px`, marginLeft:`${this.state.backgroundhorizontalAllignment*4}px`, transform: `scale(${this.state.backgroundZoom})`}}/>
                        <div className="picforeground"  style={{backgroundColor : `${this.state.labelColor}`}} >
                            <p style={{position: 'absolute', wordWrap: 'break-word',lineHeight: '20%',paddingTop:`${this.state.beerNameVerticalAllignment}px`,margin: '10%',width:'90%', textTransform:'uppercase', textAlign: 'center',fontWeight: '600', fontSize : `${this.state.beerNameFontSize/50}vh`,  color : `${this.state.beerNameColor}`}}>{this.state.beerNameTitle}</p>

                            <p style={{position: 'absolute',width: '100%',paddingTop: '150px', textTransform:'uppercase', textAlign: 'center',fontWeight: '600', fontSize : "15px",  color : `${this.state.craftedDescriptionColor}`}}>{this.state.craftedDescriptionText}*</p>

                            <p style={{position: 'absolute',width:'90%',margin:'10%',wordWrap: 'break-word',lineHeight: '20px',paddingTop:`${(parseInt(this.state.brewerNameVerticalAllignment)+parseInt(130)).toString()}px`, textAlign: 'center',fontWeight: 'lighter', fontSize : `${this.state.brewerNameFontSize}px`,  color : `${this.state.brewerNameColor}`}}>{this.state.brewerNameTitle}</p>
                        </div>
                    </div>
                    :
                    <div className="background" style={{ backgroundColor : `${this.state.backgroundColor}`, backgroundImage :`url(\"${this.state.patternSelected}\")`}} >
                        <div className="foreground"  style={{backgroundColor : `${this.state.labelColor}`}} >
                            {this.state.beerName==="text" ?
                                <div>
                                    <p style={{position: 'absolute', wordWrap: 'break-word',lineHeight: '30px',paddingTop:`${this.state.beerNameVerticalAllignment}px`,margin: '10px',width:'90%', textTransform:'uppercase', textAlign: 'center',fontWeight: '600', fontSize : `${this.state.beerNameFontSize}px`,  color : `${this.state.beerNameColor}`}}>{this.state.beerNameTitle}</p>
                                </div>
                                :
                                <div>
                                    <img src={this.state.beerLogoImage} style={{position:"absolute",width: '60%', left:'20%' , top: '20%' ,height: '30%', marginTop:`${this.state.beerNameLogoVerticalAllignment*4}px`, transform: `scale(${this.state.beerNameLogoSize})`}}/>

                                </div>
                            }
                            <p style={{position: 'absolute',width: '100%' ,paddingTop: '70%', textTransform:'uppercase', textAlign: 'center',fontWeight: '600', fontSize : "1.9vh",  color : `${this.state.craftedDescriptionColor}`}}>{this.state.craftedDescriptionText}*</p>

                            {this.state.brewerName==="text" ?
                                <div>
                                    <p style={{position: 'absolute',width:'90%',margin:'10px',wordWrap: 'break-word',lineHeight: '20px',paddingTop:`${(parseInt(this.state.brewerNameVerticalAllignment)+parseInt(130)).toString()}px`, textAlign: 'center',fontWeight: 'lighter', fontSize : `${this.state.brewerNameFontSize}px`,  color : `${this.state.brewerNameColor}`}}>{this.state.brewerNameTitle}</p>
                                </div>
                                :
                                <div>
                                    <img src={this.state.brewerNameLogoImage} style={{position:"absolute",width: '50%', left:'25%' , top: '72%' ,height: '20%', marginTop:`${this.state.brewerNameLogoVerticalAllignment*4}px`, transform: `scale(${this.state.brewerNameLogoSize})`}}/>

                                </div>
                            }
                        </div>
                    </div>
                }
                <div className = "secondaryBackground" style={{ backgroundColor : `${this.state.secondaryBackgroundColor}`}}>
                    <p style={{position:'absolute',padding:'0px', margin:'0px', marginLeft: '5%', top : '10%',  fontSize : "1.2vh",  color : `${this.state.secondaryTextColor}`}}>CRAFT AND DESIGN YOUR OWN LABEL BY <b>WAIZ SHAHID</b></p>
                </div>
                <div className="craftedByBar">
                    <p style={{position:'absolute',padding:'0px', margin:'0px', marginLeft: '5%',fontWeight: "700" ,  fontSize : "1.2vh",  color : `${this.state.globalTextColor}`}}>#CRAFTEDBY</p>
                </div>
                <div className="barCode"  style={{ backgroundColor : "#000"}}>
                    <img src={Bar1} style={{width: '100%', height: '100%'}}/>
                </div>
                <div className="brewed"  style={{ transform: 'rotate(-90deg)'}}>
                    <p style={{fontFamily: 'Carlsberg',width: '100%', height: '50%', fontSize: '2.5vh', color: `${this.state.globalTextColor}`}}> Carlsberg</p>
                </div>
                <p style={{position:'absolute',top: '86%',left:'19.5%',transform: 'rotate(-90deg)',padding:'0px', color : `${this.state.globalTextColor}` , margin:'0px', marginLeft: '2%',fontWeight: "800" ,  fontSize : "1.4vh"}}>BREWED BY</p>
                <p style={{position:'absolute',top: '75%',left:`${this.state.textTitleHorizontalAllignment}%`,transform: 'rotate(-90deg)',width:'20%',padding:'0px', color : `${this.state.textTitleColor}` , margin:'0px',fontWeight: "400" ,  fontSize : `${this.state.textTitleFontSize/20}vh`}}>{this.state.textTitleIngredients}</p>
                <div className="eighteen" style={{ transform: 'rotate(-90deg)'}}>

                    <p style={{position: "absolute", width: '100%', height: '45%', backgroundColor: `${this.state.globalTextColor}`, borderRadius: '50%'}}></p>
                    <p style={{position: "absolute", width: '80%', height: '35%', left: '8%', top: '4%',backgroundColor:  `${this.state.labelColor}`, borderRadius: '50%'}}></p>
                    <p style={{position: "absolute", width: '80%', height: '35%',top:'10%', left: '10%' , color: `${this.state.globalTextColor}`, fontSize: '85%'}}>18+</p>
                </div>
                <div className="rightSideBackground" style={{opacity:`${this.state.rightSideBackground==="transparent"? 0:1}`, backgroundColor : `${this.state.rightSideBackgroundColor}`}}>
                    <p style={{position: 'absolute', wordWrap: 'break-word',lineHeight: '30px',paddingTop:`${this.state.rightTextVerticalAllighnment*2.6}px`,margin: '10px',width:'90%', textTransform:'uppercase', textAlign: 'left',fontWeight: '600', fontSize : `${this.state.rightTextFontSize}px`,  color : `${this.state.rightTextColor}`}}>{this.state.rightTextTitle}</p>
                    {this.state.rightTextRadio==="2"?
                        <p style={{position: 'absolute', wordWrap: 'break-word',lineHeight: '30px',paddingTop:`${parseInt(this.state.rightBottomVerticalAllignment)+100}px`,margin: '10px',width:'90%', textTransform:'uppercase', textAlign: 'left',fontWeight: '600', fontSize : `${this.state.rightBottomTextSize}px`,  color : `${this.state.rightBottomTextColor}`}}>{this.state.rightBottomTextTitle}</p>
                        :null}
                </div>
            </div>
            <div style={{
                position: "absolute",
                backgroundColor: '#eeeeee',
                width: '100%',
                height: '700px',
                display: `${this.state.tab === "0" ? 'none' : 'block'}`
            }}>
                <img src={Bottle}
                     style={{position: "absolute", top: '30%', left: '40%', width: '20%', height: '70%'}}></img>
                <Typography style={{position: "absolute", top: '5%', left: '4%'}} variant="subtitle2">
                    View:
                </Typography>
                <Button size="small"
                        style={{position: "absolute", top: '8%', left: '1.8%', fontWeight: '350', fontSize: '1.68vh'}}
                        onClick={() => {
                            this.bottleView('left')
                        }}>Left</Button>
                <Button size="small"
                        style={{position: "absolute", top: '8%', left: '10%', fontWeight: '350', fontSize: '1.68vh'}}
                        onClick={() => {
                            this.bottleView('front')
                        }}>Front</Button>
                <Button size="small"
                        style={{position: "absolute", top: '8%', left: '18%', fontWeight: '350', fontSize: '1.68vh'}}
                        onClick={() => {
                            this.bottleView('right')
                        }}>Right</Button>
                <Typography style={{position: "absolute", top: '5%', right: '4%'}} variant="subtitle2">
                    Download:
                </Typography>
                <Button size="small"
                        style={{position: "absolute", top: '8%', right: '24%', fontWeight: '350', fontSize: '1.68vh'}}>Current
                    View</Button>
                <Button size="small"
                        style={{position: "absolute", top: '8%', right: '3%', fontWeight: '350', fontSize: '1.68vh'}}>Optimized
                    Front</Button>
                <Typography style={{position: "absolute", top: '13%', left: '4%'}} variant="subtitle2">
                    Quality:
                </Typography>
                <Button size="small" style={{
                    position: "absolute",
                    top: '16.5%',
                    left: '3.4%',
                    fontWeight: '350',
                    fontSize: '1.68vh'
                }}>Max Quality</Button>
                <Button style={{position: "absolute", top: '30%', left: '0%', width: '10%', height: '70%'}} sty
                        onMouseDown={() => {
                            this.rotateBottle('left')
                        }}><ArrowLeft style={{fontSize: '40'}}/></Button>
                <Button style={{position: "absolute", top: '30%', left: '90%', width: '10%', height: '70%'}}
                        onMouseDown={() => {
                            this.rotateBottle('right')
                        }}><ArrowRight style={{fontSize: '40'}}/></Button>
                <div id="container">
                    <div id="frame">
                        <div className="strip" style={{transform: `rotateY(${this.state.previewRotation}deg)`}}>


                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="a"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="b"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="c"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="d"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="e"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="f"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="g"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="h"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="i"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="j"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="k"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="l"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="m"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="n"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="o"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="p"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="q"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="r"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="s"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="t"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="u"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="v"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="w"></div>
                            <div style={{backgroundImage: `url(${this.state.fullImage})`}} className="x"></div>

                        </div>
                    </div>
                </div>
            </div>
        </Paper>


      </Grid>
      <Grid className="sixty"   >
        <div className="paper">
            <Grid xs={12} container  spacing={0}>
                <Grid  xs={5} item>
                    <Typography component="h2" variant="h7" gutterBottom>
                        Colors
                    </Typography>
                    <Typography  variant="subtitle2" gutterBottom>
                        Label Colors
                    </Typography>
                    <div className="first">
                        <NativeSelect
                        style={{width:"100px"}}
                        value={labelColor}
                        onChange={this.handleChange('labelColor')}
                        name="labelColor"
                        className="selectEmpty"
                        inputProps={{ 'aria-label': 'labelColor' }}
                        >
                            {this.state.colors.map(color => (
                                <option value={color.hex}>{color.name.toString()}</option>
                            ))}

                        </NativeSelect>
                        <Typography style={{color:'#777777'}} variant="body1">or</Typography>
                        <TextField id="labelColor" onChange={this.handleChange('labelColor')} value={this.state.labelColor} style={{width:"150px"}} size="small" label="#FFFFFF" variant="outlined" />
                    </div>
                    <Typography style={{paddingTop:'15px'}}  variant="subtitle2"gutterBottom>
                        Secondary background color
                    </Typography>
                    <div className="first">
                        <NativeSelect
                        style={{width:"100px"}}
                        gutterBottom
                        value={this.state.secondaryBackgroundColor}
                        onChange={this.handleChange('secondaryBackgroundColor')}
                        name="secondaryBackgroundColor"
                        className="selectEmpty"
                        inputProps={{ 'aria-label': 'secondaryBackgroundColor' }}
                        >
                            {this.state.colors.map(color => (
                                <option key={color.hex} value={color.hex}>{color.name.toString()}</option>
                            ))}
                        </NativeSelect>
                        <Typography style={{color:'#777777'}}variant="body1">or</Typography>
                        <TextField id="secondaryBackgroundColor" onChange={this.handleChange('secondaryBackgroundColor')} value={this.state.secondaryBackgroundColor} style={{width:"150px"}} size="small" label="Custom HEX" variant="outlined" />
                    </div>
                        <Typography style={{paddingTop:'15px'}}  variant="subtitle2" gutterBottom>
                           Global text color
                        </Typography>
                    <div className="first">
                        <NativeSelect
                        style={{width:"100px"}}
                        gutterBottom
                        value={this.state.globalTextColor}
                        onChange={this.handleChange('globalTextColor')}
                        name="globalTextColor"
                        className="selectEmpty"
                        inputProps={{ 'aria-label': 'globalTextColor' }}
                        >
                            {this.state.colors.map(color => (
                                <option key={color.hex} value={color.hex}>{color.name.toString()}</option>
                            ))}
                        </NativeSelect>
                        <Typography style={{color:'#777777'}} variant="body1">or</Typography>
                        <TextField id="globalTextColor" onChange={this.handleChange('globalTextColor')} value={this.state.globalTextColor} style={{width:"150px"}} size="small" label="Custom HEX" variant="outlined" />
                    </div>

                    <Typography style={{paddingTop:'15px'}}  variant="subtitle2"gutterBottom>
                        Secondary text color
                    </Typography>
                    <div className="first">
                        <NativeSelect
                        style={{width:"100px"}}
                        gutterBottom
                        value={this.state.secondaryTextColor}
                        onChange={this.handleChange('secondaryTextColor')}
                        name="secondaryTextColor"
                        className="selectEmpty"
                        inputProps={{ 'aria-label': 'secondaryTextColor' }}
                        >
                            {this.state.colors.map(color => (
                                <option key={color.hex} value={color.hex}>{color.name.toString()}</option>
                            ))}
                        </NativeSelect>
                        <Typography style={{color:'#777777'}} variant="body1">or</Typography>
                        <TextField id="secondaryTextColor" onChange={this.handleChange('secondaryTextColor')} value={this.state.secondaryTextColor} style={{width:"150px"}} size="small" label="Custom HEX" variant="outlined" />
                    </div>
                    <Typography style={{paddingTop:'15px'}}  variant="subtitle2" gutterBottom>
                        Right side background
                    </Typography>
                    <RadioGroup aria-label="rightSideBackground" name="rightSideBackground" value={this.state.rightSideBackground} onChange={this.handleChange('rightSideBackground')} row>
                        <FormControlLabel
                            value="solid"
                            control={<Radio color="primary" />}
                            label="Solid Color"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="transparent"
                            control={<Radio color="primary" />}
                            label="Transparent"
                            labelPlacement="end"
                        />
                    </RadioGroup>
                    {this.state.rightSideBackground==="solid"?
                        <div className="first">
                            <NativeSelect
                            style={{width:"100px"}}
                            gutterBottom
                            value={this.state.rightSideBackgroundColor}
                            onChange={this.handleChange('rightSideBackgroundColor')}
                            name="rightSideBackgroundColor"
                            className="selectEmpty"
                            inputProps={{ 'aria-label': 'rightSideBackgroundColor' }}
                            >
                                {this.state.colors.map(color => (
                                    <option key={color.hex} value={color.hex}>{color.name.toString()}</option>
                                ))}
                            </NativeSelect>
                            <Typography style={{color:'#777777'}} variant="body1">or</Typography>
                            <TextField id="rightSideBackgroundColor" onChange={this.handleChange('rightSideBackgroundColor')} value={this.state.rightSideBackgroundColor} style={{width:"150px"}} size="small" label="Custom HEX" variant="outlined" />
                        </div>
                    : null}

                </Grid>
                <Grid style={{marginLeft:'20px'}} key={4} item>
                    <Divider  style={{marginLeft:'2px', paddingLeft:"2px"}} orientation="vertical" />
                </Grid>
                <Grid xs={5} style={{marginLeft:"20px"}}>
                <Button style={{position:'absolute',right:'4%'}} onClick={this.randomizeColors} size="small" variant="contained">RANDOMIZE COLORS</Button>
                    <Typography style={{paddingTop:'25px'}}  variant="subtitle2" gutterBottom>
                        Background
                    </Typography>

                    <RadioGroup aria-label="backgroundRadio" name="backgroundRadio" value={this.state.backgroundRadio} onChange={this.handleChange('backgroundRadio')} row>
                        <FormControlLabel
                            value="color"
                            control={<Radio color="primary" />}
                            label="Color"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="background"
                            control={<Radio color="primary" />}
                            label="Background"
                            labelPlacement="end"
                        />
                    </RadioGroup>
                    {this.state.backgroundRadio==="color"?
                    <div>
                        <div className="first">
                            <NativeSelect
                            style={{width:"100px"}}
                            gutterBottom
                            value={this.state.backgroundColor}
                            onChange={this.handleChange('backgroundColor')}
                            name="backgroundColor"
                            className="selectEmpty"
                            inputProps={{ 'aria-label': 'backgroundColor' }}
                            >
                                {this.state.colors.map(color => (
                                    <option key={color.hex} value={color.hex}>{color.name.toString()}</option>
                                ))}
                            </NativeSelect>
                            <Typography style={{color:'#777777'}} variant="body1">or</Typography>
                            <TextField id="backgroundColor"  onChange={this.handleChange('backgroundColor')} value={this.state.backgroundColor} style={{width:"150px"}} size="small" label="Custom HEX" variant="outlined" />
                        </div>
                        <Typography style={{paddingTop:'15px'}}  variant="subtitle2" gutterBottom>
                            Pattern
                        </Typography>
                        <div className="first">
                            <NativeSelect
                            style={{width:"100px"}}
                            gutterBottom
                            value={this.state.patternSelected}
                            onChange={this.handleChange('patternSelected')}
                            name="patternSelected"
                            className="selectEmpty"
                            inputProps={{ 'aria-label': 'patternSelected' }}
                            >
                                {this.state.patterns.map(pattern => (
                                    <option key={pattern.name} value={pattern.svg}>{pattern.name.toString()}</option>
                                ))}
                            </NativeSelect>
                        </div>
                        <Typography style={{paddingTop:'15px'}}  variant="subtitle2"gutterBottom>
                            Pattern Color
                        </Typography>
                        <div className="first">
                            <NativeSelect
                            style={{width:"100px"}}
                            gutterBottom
                            value={this.state.patternColor}
                            onChange={this.handleChange('patternColor')}
                            name="patternColor"
                            className="selectEmpty"
                            inputProps={{ 'aria-label': 'patternColor' }}
                            >
                                {this.state.colors.map(color => (
                                    <option key={color.hex} value={color.hex}>{color.name.toString()}</option>
                                ))}
                            </NativeSelect>
                            <Typography style={{color:'#777777'}} variant="body1">or</Typography>
                            <TextField id="patternColor"  onChange={this.handleChange('patternColor')} value={this.state.patternColor} style={{width:"150px"}} size="small" label="Custom HEX" variant="outlined" />
                        </div>
                    </div>
                    :
                    <div>
                        <Typography style={{paddingTop:'15px'}}  variant="subtitle2"gutterBottom>
                            File
                        </Typography>
                        <input accept="image/*" className="input" id="customImage" onChange={this.handleImageChange()} type="file" />
                        <Typography style={{color:'#777777'}} variant="body1">or</Typography>
                        <NativeSelect
                        style={{width:"200px"}}
                        gutterBottom
                        value={this.state.backgroundImage}
                        onChange={this.handleChange('backgroundImage')}
                        name="backgroundImage"
                        className="selectEmpty"
                        inputProps={{ 'aria-label': 'backgroundImage' }}
                        >
                            {this.state.images.map(image => (
                                <option key={image.src} value={image.src}>{image.name.toString()}</option>
                            ))}
                        </NativeSelect>
                        <Typography style={{paddingTop:'15px'}}  variant="subtitle2"gutterBottom>
                            Overlay
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Typography style={{color:'#777777'}} variant="body1">Dark</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Slider name="overlaySlider" value={this.state.overlaySlider} onChange={this.handleSliderChange("overlaySlider")} aria-labelledby="overlaySlider"
                                min={0}
                                max={100} />
                            </Grid>
                            <Grid item>
                            <Typography style={{color:'#777777'}} variant="body1">Light</Typography>
                            </Grid>
                        </Grid>
                        <Typography style={{paddingTop:'15px'}}  variant="subtitle2"gutterBottom>
                            Vertical Allignment
                        </Typography>
                        <Grid xs={7} container spacing={0} alignItems="center">
                            <Grid item xs={8}>
                            <Slider
                            name="backgroundVerticalAllignment" value={this.state.backgroundVerticalAllignment} onChange={this.handleSliderChange("backgroundVerticalAllignment")} aria-labelledby="backgroundVerticalAllignment"
                            min={-50}
                            max={50} />
                            </Grid>
                            <Grid xs={4} item>
                            <Input
                                endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                className="input"
                                value={this.state.backgroundVerticalAllignment}
                                margin="dense"
                                onChange={this.handleChange('backgroundVerticalAllignment')}
                                inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                            </Grid>
                        </Grid>
                        <Typography style={{paddingTop:'15px'}}  variant="subtitle2"gutterBottom>
                            Horizontal Allignment
                        </Typography>
                        <Grid xs={7} container spacing={0} alignItems="center">
                            <Grid item xs={8}>
                            <Slider
                            name="backgroundhorizontalAllignment" value={this.state.backgroundhorizontalAllignment} onChange={this.handleSliderChange("backgroundhorizontalAllignment")} aria-labelledby="backgroundhorizontalAllignment"
                            min={-50}
                            max={50} />
                            </Grid>
                            <Grid xs={4} item>
                            <Input
                                endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                className="input"
                                value={this.state.backgroundhorizontalAllignment}
                                margin="dense"
                                onChange={this.handleChange('backgroundhorizontalAllignment')}
                                inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                            </Grid>
                        </Grid>
                        <Typography style={{paddingTop:'15px'}}  variant="subtitle2"gutterBottom>
                            Zoom Level
                        </Typography>
                        <Grid xs={7} container spacing={0} alignItems="center">
                            <Grid xs={8} item xs>
                            <Slider
                            name="backgroundZoom" value={this.state.backgroundZoom} onChange={this.handleSliderChange("backgroundZoom")} aria-labelledby="backgroundZoom"
                            min={0}
                            max={5}
                            step={0.10} />
                            </Grid>
                            <Grid xs={4} item>
                            <Input
                                endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                className="input"
                                value={this.state.backgroundZoom}
                                margin="dense"
                                onChange={this.handleChange('backgroundZoom')}
                                inputProps={{
                                step: 0.10,
                                min: 0,
                                max: 5,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                            </Grid>
                        </Grid>
                    </div>
                    }
                </Grid>

            </Grid>

            <Divider style={{marginTop:"30px",paddingTop:'2px'}}/>
            <Grid  xs={5} item>
                <Typography style={{marginTop:"10px"}} component="h2" variant="h7" gutterBottom>
                    Label Language
                </Typography>
                <RadioGroup aria-label="lableLanguage" name="lableLanguage" value={this.state.lableLanguage} onChange={this.handleChange('lableLanguage')} row>
                    <FormControlLabel
                        value="english"
                        control={<Radio color="primary" />}
                        label="English"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="danish"
                        control={<Radio color="primary" />}
                        label="Danish"
                        labelPlacement="end"
                    />
                </RadioGroup>
            </Grid>
            <Divider style={{marginTop:"30px",paddingTop:'2px'}}/>
            <Grid  xs={11} item>
                <Typography style={{marginTop:"10px"}} component="h2" variant="h7" gutterBottom>
                Personalization
                </Typography>
                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                    Beer name
                </Typography>
                <RadioGroup aria-label="beerName" name="beerName" value={this.state.beerName} onChange={this.handleChange('beerName')} row>
                    <FormControlLabel
                        value="text"
                        control={<Radio color="primary" />}
                        label="Text"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="logo"
                        control={<Radio color="primary" />}
                        label="Logo"
                        labelPlacement="end"
                    />
                </RadioGroup>
                {this.state.beerName ==="text"?
                <div className="first">
                    <Grid  xs={2} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Title
                    </Typography>
                    <TextField
                    id="beerNameTitle"
                    multiline
                    rows="4"
                    variant="outlined"
                    onChange={this.handleChange('beerNameTitle')}
                    value={this.state.beerNameTitle}
                    />
                    </Grid>
                    <Grid  xs={2} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Color
                    </Typography>
                    <NativeSelect
                            style={{width:"100px"}}
                            gutterBottom
                            value={this.state.beerNameColor}
                            onChange={this.handleChange('beerNameColor')}
                            name="beerNameColor"
                            className="selectEmpty"
                            inputProps={{ 'aria-label': 'beerNameColor' }}
                            >
                                {this.state.colors.map(color => (
                                    <option value={color.hex}>{color.name.toString()}</option>
                                ))}
                            </NativeSelect>
                    </Grid>
                    <Grid  xs={3} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Font-size
                    </Typography>
                    <Grid xs={12} container spacing={0} alignItems="center">
                                <Grid xs={8} item xs>
                                <Slider
                                name="beerNameFontSize" value={this.state.beerNameFontSize} onChange={this.handleSliderChange("beerNameFontSize")} aria-labelledby="beerNameFontSize"
                                min={0}
                                max={100} />
                                </Grid>
                                <Grid xs={4} item>
                                <Input
                                    endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                    className="input"
                                    value={this.state.beerNameFontSize}
                                    margin="dense"
                                    onChange={this.handleChange('beerNameFontSize')}
                                    inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 100,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                    }}
                                />
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid  xs={3} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Vertical Allignment
                    </Typography>
                    <Grid xs={12} container spacing={0} alignItems="center">
                                <Grid xs={8} item xs>
                                <Slider
                                name="beerNameVerticalAllignment" value={this.state.beerNameVerticalAllignment} onChange={this.handleSliderChange("beerNameVerticalAllignment")} aria-labelledby="beerNameVerticalAllignment"
                                min={0}
                                max={100} />
                                </Grid>
                                <Grid xs={4} item>
                                <Input
                                    endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                    className="input"
                                    value={this.state.beerNameVerticalAllignment}
                                    margin="dense"
                                    onChange={this.handleChange('beerNameVerticalAllignment')}
                                    inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 100,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                    }}
                                />
                                </Grid>
                            </Grid>
                    </Grid>
                </div>
                :
                <div>
                    <Grid xs={8} item>
                        <div className="first">
                            <Grid  xs={2} item>
                            <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                                File
                            </Typography>
                            <input accept="image/*" className="input" id="beerLogoImage" onChange={this.handleBeerLogo()} type="file" />
                            </Grid>
                            <Grid  xs={6} item>
                            <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                                Force Color
                            </Typography>
                            <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.logoWhitify}
                                    onChange={this.handleChange('logoWhitify')}
                                    value="logoWhitify"
                                    color="primary"
                                />
                                }
                                label="Whitify"
                            />
                            </Grid>
                        </div>
                        <div style={{paddingTop:"20px"}} className="first">
                            <Grid  xs={6} item>
                                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                                    Size
                                </Typography>
                                <Grid xs={9} container spacing={0} alignItems="center">
                                    <Grid xs={8} item xs>
                                        <Slider
                                        name="beerNameLogoSize" value={this.state.beerNameLogoSize} onChange={this.handleSliderChange("beerNameLogoSize")} aria-labelledby="beerNameLogoSize"
                                        min={0}
                                        max={5}
                                        step = {0.1} />
                                    </Grid>
                                    <Grid xs={4} item>
                                        <Input
                                            endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                            className="input"
                                            value={this.state.beerNameLogoSize}
                                            margin="dense"
                                            onChange={this.handleChange('beerNameLogoSize')}
                                            inputProps={{
                                            step: 5,
                                            min: 0,
                                            max: 100,
                                            type: 'number',
                                            'aria-labelledby': 'input-slider',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid  xs={6} item>
                                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                                    Vertical alignment
                                </Typography>
                                <Grid xs={9} container spacing={0} alignItems="center">
                                    <Grid xs={8} item xs>
                                        <Slider
                                        name="beerNameLogoVerticalAllignment" value={this.state.beerNameLogoVerticalAllignment} onChange={this.handleSliderChange("beerNameLogoVerticalAllignment")} aria-labelledby="beerNameLogoVerticalAllignment"
                                        min={-50}
                                        max={50} />
                                    </Grid>
                                    <Grid xs={4} item>
                                        <Input
                                            endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                            className="input"
                                            value={this.state.beerNameLogoVerticalAllignment}
                                            margin="dense"
                                            onChange={this.handleChange('beerNameLogoVerticalAllignment')}
                                            inputProps={{
                                            step: 10,
                                            min: 0,
                                            max: 100,
                                            type: 'number',
                                            'aria-labelledby': 'input-slider',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </div>
                }

                <Typography style={{paddingTop:'20px'}}  variant="subtitle2"gutterBottom>
                    Brewer name
                </Typography>
                <RadioGroup aria-label="brewerName" name="brewerName" value={this.state.brewerName} onChange={this.handleChange('brewerName')} row>
                    <FormControlLabel
                        value="text"
                        control={<Radio color="primary" />}
                        label="Text"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="logo"
                        control={<Radio color="primary" />}
                        label="Logo"
                        labelPlacement="end"
                    />
                </RadioGroup>
                {this.state.brewerName ==="text"?
                    <div className="first">
                    <Grid  xs={2} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Title
                    </Typography>
                    <TextField
                    id="title-field"
                    multiline
                    rows="4"
                    variant="outlined"
                    onChange={this.handleChange('brewerNameTitle')}
                    value={this.state.brewerNameTitle}
                    />
                    </Grid>
                    <Grid  xs={2} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Color
                    </Typography>
                    <NativeSelect
                            style={{width:"100px"}}
                            gutterBottom
                            value={this.state.brewerNameColor}
                            onChange={this.handleChange('brewerNameColor')}
                            name="brewerNameColor"
                            className="selectEmpty"
                            inputProps={{ 'aria-label': 'brewerNameColor' }}
                            >
                                {this.state.colors.map(color => (
                                    <option value={color.hex}>{color.name.toString()}</option>
                                ))}
                            </NativeSelect>
                    </Grid>
                    <Grid  xs={3} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Font-size
                    </Typography>
                    <Grid xs={12} container spacing={0} alignItems="center">
                                <Grid xs={8} item xs>
                                <Slider
                                name="brewerNameFontSize" value={this.state.brewerNameFontSize} onChange={this.handleSliderChange("brewerNameFontSize")} aria-labelledby="brewerNameFontSize"
                                min={0}
                                max={100} />
                                </Grid>
                                <Grid xs={4} item>
                                <Input
                                    endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                    className="input"
                                    value={this.state.brewerNameFontSize}
                                    margin="dense"
                                    onChange={this.handleChange('brewerNameFontSize')}
                                    inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 100,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                    }}
                                />
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid  xs={3} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Vertical Allignment
                    </Typography>
                    <Grid xs={12} container spacing={0} alignItems="center">
                                <Grid xs={8} item xs>
                                <Slider
                                name="brewerNameVerticalAllignment" value={this.state.brewerNameVerticalAllignment} onChange={this.handleSliderChange("brewerNameVerticalAllignment")} aria-labelledby="brewerNameVerticalAllignment"
                                min={0}
                                max={100} />
                                </Grid>
                                <Grid xs={4} item>
                                <Input
                                    endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                    className="input"
                                    value={this.state.brewerNameVerticalAllignment}
                                    margin="dense"
                                    onChange={this.handleChange('brewerNameVerticalAllignment')}
                                    inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 100,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                    }}
                                />
                                </Grid>
                            </Grid>
                    </Grid>
                    </div>
                :
                <div>
                    <Grid xs={8} item>
                        <div className="first">
                            <Grid  xs={2} item>
                            <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                                File
                            </Typography>
                            <input accept="image/*" className="input" id="BrewerNameLogo" onChange={this.handleBrewerLogo()} type="file" />
                            </Grid>
                            <Grid  xs={6} item>
                            <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                                Force Color
                            </Typography>
                            <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.brewerNameLogoWhitify}
                                    onChange={this.handleChange('brewerNameLogoWhitify')}
                                    value="brewerNameLogoWhitify"
                                    color="primary"
                                />
                                }
                                label="Whitify"
                            />
                            </Grid>
                        </div>
                        <div style={{paddingTop:"20px"}} className="first">
                            <Grid  xs={6} item>
                                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                                    Size
                                </Typography>
                                <Grid xs={9} container spacing={0} alignItems="center">
                                    <Grid xs={8} item xs>
                                        <Slider
                                        name="brewerNameLogoSize" value={this.state.brewerNameLogoSize} onChange={this.handleSliderChange("brewerNameLogoSize")} aria-labelledby="brewerNameLogoSize"
                                        min={0}
                                        max={5}
                                        step={0.1} />
                                    </Grid>
                                    <Grid xs={4} item>
                                        <Input
                                            endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                            className="input"
                                            value={this.state.brewerNameLogoSize}
                                            margin="dense"
                                            onChange={this.handleChange('brewerNameLogoSize')}
                                            inputProps={{
                                            step: 10,
                                            min: 0,
                                            max: 100,
                                            type: 'number',
                                            'aria-labelledby': 'input-slider',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid  xs={6} item>
                                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                                    Vertical alignment
                                </Typography>
                                <Grid xs={9} container spacing={0} alignItems="center">
                                    <Grid xs={8} item xs>
                                        <Slider
                                        name="brewerNameLogoVerticalAllignment" value={this.state.brewerNameLogoVerticalAllignment} onChange={this.handleSliderChange("brewerNameLogoVerticalAllignment")} aria-labelledby="brewerNameLogoVerticalAllignment"
                                        min={-50}
                                        max={50} />
                                    </Grid>
                                    <Grid xs={4} item>
                                        <Input
                                            endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                            className="input"
                                            value={this.state.brewerNameLogoVerticalAllignment}
                                            margin="dense"
                                            onChange={this.handleChange('brewerNameLogoVerticalAllignment')}
                                            inputProps={{
                                            step: 10,
                                            min: 0,
                                            max: 100,
                                            type: 'number',
                                            'aria-labelledby': 'input-slider',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </div>
                }

                <Typography style={{paddingTop:'20px'}}  variant="subtitle2"gutterBottom>
                   Crafted Description
                </Typography>
                <Grid xs={2} item>
                    <div className="first">
                    <Grid  xs={2} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Text
                    </Typography>

                    <NativeSelect
                            style={{width:"100px"}}
                            gutterBottom
                            value={this.state.craftedDescriptionText}
                            onChange={this.handleChange('craftedDescriptionText')}
                            name="craftedDescriptionText"
                            className="selectEmpty"
                            inputProps={{ 'aria-label': 'craftedDescriptionText' }}
                            >
                                <option value="crafted by">Crafted by</option>
                                <option value="crafted for">Crafted for</option>
                            </NativeSelect>
                    </Grid>
                    <Grid  xs={2} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Color
                    </Typography>
                    <NativeSelect
                            style={{width:"100px"}}
                            gutterBottom
                            value={this.state.craftedDescriptionColor}
                            onChange={this.handleChange('craftedDescriptionColor')}
                            name="craftedDescriptionColor"
                            className="selectEmpty"
                            inputProps={{ 'aria-label': 'craftedDescriptionColor' }}
                            >
                                {this.state.colors.map(color => (
                                    <option value={color.hex}>{color.name.toString()}</option>
                                ))}
                            </NativeSelect>
                    </Grid>
                    </div>
                </Grid>
                <Grid  xs={12} item>
                <Divider style={{marginTop:"30px",paddingTop:'2px'}}/>
                <Typography style={{marginTop:"10px"}} component="h2" variant="h7" gutterBottom>
                Legend
                </Typography>
                <Grid xs={7} item>
                    <div className="first">
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Bitterness
                    </Typography>

                    <RadioGroup aria-label="bitterness" name="bitterness" value={this.state.legendBitterness} onChange={this.handleChange('legendBitterness')} row>
                        <FormControlLabel
                            value="0"
                            control={<Radio color="primary" />}
                            label="Not Defined"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="1"
                            control={<Radio color="primary" />}
                            label="1"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio color="primary" />}
                            label="2"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="3"
                            control={<Radio color="primary" />}
                            label="3"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="4"
                            control={<Radio color="primary" />}
                            label="4"
                            labelPlacement="end"
                        />
                    </RadioGroup>
                    </div>
                </Grid>
                <Grid xs={7} item>
                    <div className="first">
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Color
                    </Typography>
                    <RadioGroup  aria-label="legendColor" name="legendColor" value={this.state.legendColor} onChange={this.handleChange('legendColor')} row>
                        <FormControlLabel

                            value="notDefined"
                            control={<Radio color="primary" />}
                            label="Not Defined"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="1"
                            control={<Radio color="primary" />}
                            label="1"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio color="primary" />}
                            label="2"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            style={{marginRight: '72px'}}
                            value="3"
                            control={<Radio color="primary" />}
                            label="3"
                            labelPlacement="end"
                        />
                    </RadioGroup>
                    </div>
                </Grid>
                <Grid xs={7} item>
                    <div className="first">
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Strength
                    </Typography>

                    <RadioGroup aria-label="legendStrength" name="legendStrength" value={this.state.legendStrength} onChange={this.handleChange('legendStrength')} row>
                        <FormControlLabel
                            value="notDefined"
                            control={<Radio color="primary" />}
                            label="Not Defined"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="1"
                            control={<Radio color="primary" />}
                            label="1"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio color="primary" />}
                            label="2"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            style={{marginRight: '72px'}}
                            value="3"
                            control={<Radio color="primary" />}
                            label="3"
                            labelPlacement="end"
                        />
                    </RadioGroup>
                    </div>
                </Grid>
                </Grid>
            </Grid>
            <Divider style={{marginTop:"30px",paddingTop:'2px'}}/>
            <Grid  xs={11} item>
                <Typography style={{marginTop:"10px"}} component="h2" variant="h7" gutterBottom>
                Text
                </Typography>
                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                    Ingredients
                </Typography>

                <div className="first">
                <Grid  xs={2} item>
                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                    Title
                </Typography>
                <TextField
                id="title-field"
                multiline
                rows="4"
                variant="outlined"
                value={this.state.textTitleIngredients}
                onChange={this.handleChange('textTitleIngredients')}
                />
                </Grid>
                <Grid  xs={2} item>
                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                    Color
                </Typography>
                <NativeSelect
                        style={{width:"100px"}}
                        gutterBottom
                        value={this.state.textTitleColor}
                        onChange={this.handleChange('textTitleColor')}
                        name="textTitleColor"
                        className="selectEmpty"
                        inputProps={{ 'aria-label': 'textTitleColor' }}
                        >
                            {this.state.colors.map(color => (
                                <option value={color.hex}>{color.name.toString()}</option>
                            ))}
                        </NativeSelect>
                </Grid>
                <Grid  xs={3} item>
                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                    Font-size
                </Typography>
                <Grid xs={12} container spacing={0} alignItems="center">
                            <Grid xs={8} item xs>
                            <Slider
                            name="textTitleFontSize" value={this.state.textTitleFontSize} onChange={this.handleSliderChange("textTitleFontSize")} aria-labelledby="textTitleFontSize"
                            min={0}
                            max={100} />
                            </Grid>
                            <Grid xs={4} item>
                            <Input
                                endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                className="input"
                                value={this.state.textTitleFontSize}
                                margin="dense"
                                onChange={this.handleChange('textTitleFontSize')}
                                inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                            </Grid>
                        </Grid>
                </Grid>
                <Grid  xs={3} item>
                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                    Horizontal Allignment
                </Typography>
                <Grid xs={12} container spacing={0} alignItems="center">
                            <Grid xs={8} item xs>
                            <Slider
                            name="textTitleHorizontalAllignment" value={this.state.textTitleHorizontalAllignment} onChange={this.handleSliderChange("textTitleHorizontalAllignment")} aria-labelledby="textTitleHorizontalAllignment"
                            min={0}
                            max={50} />
                            </Grid>
                            <Grid xs={4} item>
                            <Input
                                endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                className="input"
                                value={this.state.textTitleHorizontalAllignment}
                                margin="dense"
                                onChange={this.handleChange('textTitleHorizontalAllignment')}
                                inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                            </Grid>
                        </Grid>
                </Grid>
                </div>
                <Typography style={{paddingTop:'20px'}}  variant="subtitle2"gutterBottom>
                    Right Text
                </Typography>
                <RadioGroup aria-label="rightTextRadio" name="rightTextRadio" value={this.state.rightTextRadio} onChange={this.handleChange('rightTextRadio')} row>
                    <FormControlLabel
                        value="1"
                        control={<Radio color="primary" />}
                        label="1 part"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="2"
                        control={<Radio color="primary" />}
                        label="2 parts"
                        labelPlacement="end"
                    />
                </RadioGroup>
                {this.state.rightTextRadio==="1"?
                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                    Text (Auto)
                </Typography>
                :
                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                    Top Text (Auto)
                </Typography>
                }

                <div className="first">
                <Grid  xs={2} item>
                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                    Title
                </Typography>
                <TextField
                value={this.state.rightTextTitle}
                onChange={this.handleChange('rightTextTitle')}
                id="rightTextTitle"
                multiline
                rows="4"
                variant="outlined"
                />
                </Grid>
                <Grid  xs={2} item>
                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                    Color
                </Typography>
                <NativeSelect
                        style={{width:"100px"}}
                        gutterBottom
                        value={this.state.rightTextColor}
                        onChange={this.handleChange('rightTextColor')}
                        name="rightTextColor"
                        className="selectEmpty"
                        inputProps={{ 'aria-label': 'textColor' }}
                        >
                            {this.state.colors.map(color => (
                                <option value={color.hex}>{color.name.toString()}</option>
                            ))}
                        </NativeSelect>
                </Grid>
                <Grid  xs={3} item>
                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                    Font-size
                </Typography>
                <Grid xs={12} container spacing={0} alignItems="center">
                            <Grid xs={8} item xs>
                            <Slider
                            name="rightTextFontSize" value={this.state.rightTextFontSize} onChange={this.handleSliderChange("rightTextFontSize")} aria-labelledby="rightTextFontSize"
                            min={0}
                            max={100} />
                            </Grid>
                            <Grid xs={4} item>
                            <Input
                                endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                className="input"
                                value={this.state.rightTextFontSize}
                                margin="dense"
                                onChange={this.handleChange('rightTextFontSize')}
                                inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                            </Grid>
                        </Grid>
                </Grid>
                <Grid  xs={3} item>
                <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                    Vertical Allignment
                </Typography>
                <Grid xs={12} container spacing={0} alignItems="center">
                            <Grid xs={8} item xs>
                            <Slider
                            name="rightTextVerticalAllighnment" value={this.state.rightTextVerticalAllighnment} onChange={this.handleSliderChange("rightTextVerticalAllighnment")} aria-labelledby="rightTextVerticalAllighnment"
                            min={0}
                            max={100} />
                            </Grid>
                            <Grid xs={4} item>
                            <Input
                                endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                className="input"
                                value={this.state.rightTextVerticalAllighnment}
                                margin="dense"
                                onChange={this.handleChange('rightTextVerticalAllighnment')}
                                inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                            </Grid>
                        </Grid>
                </Grid>
                </div>
                {this.state.rightTextRadio==="2"?
                <div>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Bottom Text (Auto)
                    </Typography>
                    <div className="first">
                    <Grid  xs={2} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Title
                    </Typography>
                    <TextField
                    value={this.state.rightBottomTextTitle}
                    onChange={this.handleChange('rightBottomTextTitle')}
                    id="title-field"
                    multiline
                    rows="4"
                    variant="outlined"
                    />
                    </Grid>
                    <Grid  xs={2} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Color
                    </Typography>
                    <NativeSelect
                            style={{width:"100px"}}
                            gutterBottom
                            value={this.state.rightBottomTextColor}
                            onChange={this.handleChange('rightBottomTextColor')}
                            name="rightBottomTextColor"
                            className="selectEmpty"
                            inputProps={{ 'aria-label': 'rightBottomTextColor' }}
                            >
                                {this.state.colors.map(color => (
                                    <option value={color.hex}>{color.name.toString()}</option>
                                ))}
                            </NativeSelect>
                    </Grid>
                    <Grid  xs={3} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Font-size
                    </Typography>
                    <Grid xs={12} container spacing={0} alignItems="center">
                                <Grid xs={8} item xs>
                                <Slider
                                name="rightBottomTextSize" value={this.state.rightBottomTextSize} onChange={this.handleSliderChange("rightBottomTextSize")} aria-labelledby="rightBottomTextSize"
                                min={0}
                                max={100} />
                                </Grid>
                                <Grid xs={4} item>
                                <Input
                                    endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                    className="input"
                                    value={this.state.rightBottomTextSize}
                                    margin="dense"
                                    onChange={this.handleChange('rightBottomTextSize')}
                                    inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 100,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                    }}
                                />
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid  xs={3} item>
                    <Typography style={{paddingTop:'5px'}}  variant="subtitle2"gutterBottom>
                        Vertical Allignment
                    </Typography>
                    <Grid xs={12} container spacing={0} alignItems="center">
                                <Grid xs={8} item xs>
                                <Slider
                                name="rightBottomVerticalAllignment" value={this.state.rightBottomVerticalAllignment} onChange={this.handleSliderChange("rightBottomVerticalAllignment")} aria-labelledby="rightBottomVerticalAllignment"
                                min={0}
                                max={150} />
                                </Grid>
                                <Grid xs={4} item>
                                <Input
                                    endAdornment={<InputAdornment position="end">px</InputAdornment>}
                                    className="input"
                                    value={this.state.rightBottomVerticalAllignment}
                                    margin="dense"
                                    onChange={this.handleChange('rightBottomVerticalAllignment')}
                                    inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 150,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                    }}
                                />
                                </Grid>
                            </Grid>
                    </Grid>
                    </div>
                </div>
                    : null
                }
                <Divider style={{marginTop:"30px",paddingTop:'2px'}}/>
                </Grid>
            <Grid  xs={12} item>
                <Typography style={{marginTop:"10px"}} component="h2" variant="h7" gutterBottom>
                Text server rendering
                </Typography>
                <FormControlLabel
                control={
                    <Checkbox
                        checked={this.state.includeBleed}
                        onChange={this.handleChange('includeBleed')}
                        value="includeBleed"
                        color="primary"
                    />
                    }
                    label="Include bleed"
                />
                <Divider style={{marginTop:"30px",paddingTop:'2px'}}/>
            </Grid>
            <Grid  xs={12} item>
                <Typography style={{marginTop:"10px"}} component="h2" variant="h7" gutterBottom>
                Format
                </Typography>
                <RadioGroup aria-label="format" name="format" value={this.state.format} onChange={this.handleChange('format')} row>
                    <FormControlLabel
                        value="png"
                        control={<Radio color="primary" />}
                        label="PNG"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="pdf"
                        control={<Radio color="primary" />}
                        label="PDF"
                        labelPlacement="end"
                    />
                </RadioGroup>
                <Button style={{marginTop:"10px"}} fullWidth name="renderOnServer" variant="contained" onClick={this.handleRenderOnServer} color="primary">
                    Render On Server
                </Button>
                <Divider style={{marginTop:"30px",paddingTop:'2px'}}/>
            </Grid>
        </div>
      </Grid>
    </Grid>
    </PageStyler>
  );
}
}

const PageStyler = styled.div`
.full-page {
    display: flex;
}
.forty {
    width: 40%;
}
.sixty {
    width: 60%;
}
.root {
    height: '100vh';
  }
  .paper {
    margin-top: 46px;
    margin-left:40px;
    display: block;
    flex-direction: column;
  }
  .form {
    width: 100%; // Fix IE 11 issue.
    margin-top: 10px;
  }
  .submit {
    margin: 10px;
  }
  .selectEmpty {
    margin-top:10px;
  }
  .formRoot {
      margin: 10px;
      width:200;
  }
  .first {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .rectangle {
      position: relative;
      overflow: hidden;
      height: 41vh;
      width:100%;
  }
  .rightSideBackground {
    position: absolute;
    top:0%;
    left:71%;
    height: 41vh;
    width:29%;
    }
  .secondaryBackground {
    position: absolute;
    top: 28%;
    height: 10%;
    width: 28%;
    background-color: #AAA;
  }
  .craftedByBar {
    position: absolute;
    top: 43%;
    height: 10%;
    width: 28%;
  }
  .barCode {
    position: absolute;
    top: 50%;
    height: 50%;
    width: 12%;
  }
  .brewed {
    position: absolute;
    top: 53%;
    left: 17%;
    height: 16%;
    width: 15%;
  }
  .eighteen {
    position: absolute;
    top: 38%;
    left: 24.5%;
    height: 20%;
    width: 4%;
  }
  .background {
    position: relative;
    left: 30%;
    height: 100%;
    width: 41%;
  }
  .foreground {
    position: relative;
    left : 15%;
    top: 10%;
    height: 80%;
    width: 70%;
  }
  .beerLogo{
    position: relative;
    left : 10%;
    top: 10%;
  }
  .picforeground {
    position: relative;
    left : 9%;
    top: 10%;
    height: 80%;
    width: 41%; 
  }
  .pictureBackground{
    position: relative;
    left: 30%;
    height: 100%;
    width: 70%;
  }
  .legend {
    position: relative;
  }
  .bitterness {
    position: absolute;
  }
  .color {
    position: absolute;
    margin-top: 3%;
  }
  .strength {
    position: absolute;
    margin-top:6%;
  }
  .dot {
    margin-top: 2.2vh;
    height: 1.3vh;
    width: 1.3vh;
    margin-left: 12vh;
    border-radius: 50%;
    display: inline-block;
    
  }
  .beerNameTitle {
      position: relative;
      margin: 10%;
      padding-top: 10%;
  }
  .crafted {
    position: relative;
    margin: 20px;
    padding-top: 60px;
  }
  #container {
	text-align:center;
	margin:0 auto;
	top:450px;
	width:50px;
	-moz-perspective: 900px;	  
	-webkit-perspective: 900}
	
#container:hover * {
	-moz-animation-play-state:paused;
	-webkit-animation-play-state:paused}
	  
#frame {width: 34px;
    transform: translate3d(8px, 790px, -700px)}

.strip {-moz-transform-style: preserve-3d;
	-webkit-transform-style: preserve-3d;
}

.strip div {
	position: absolute;
	border-width: thin 0;
	height:367px;
	width:34px;
	opacity: 1;}
.strip .a {background-position: 0 0;
	   -moz-transform: rotateY(0deg) translateZ(124px);
	-webkit-transform: rotateY(0deg) translateZ(124px)}
		
.strip .b {background-position: 690px 0;
	   -moz-transform: rotateY(15deg) translateZ(124px);
	-webkit-transform: rotateY(15deg) translateZ(124px)}
	
.strip .c {background-position: 660px 0;
	   -moz-transform: rotateY(30deg) translateZ(124px);
	-webkit-transform: rotateY(30deg) translateZ(124px)}
	
.strip .d {background-position: 630px 0;
	   -moz-transform: rotateY(45deg) translateZ(124px);
	-webkit-transform: rotateY(45deg) translateZ(124px)}	
	
.strip .e {background-position: 600px 0;
	   -moz-transform: rotateY(60deg) translateZ(124px);
	-webkit-transform: rotateY(60deg) translateZ(124px)}	
	
.strip .f {background-position: 570px 0;
	   -moz-transform: rotateY(75deg) translateZ(124px);
	-webkit-transform: rotateY(75deg) translateZ(124px)}
	
.strip .g {background-position: 540px 0;
	   -moz-transform: rotateY(90deg) translateZ(124px);
	-webkit-transform: rotateY(90deg) translateZ(124px)}
	
.strip .h {background-position: 510px 0;
	   -moz-transform: rotateY(105deg) translateZ(124px);
	-webkit-transform: rotateY(105deg) translateZ(124px)}	
	
.strip .i {background-position: 480px 0;
	   -moz-transform: rotateY(120deg) translateZ(124px);
	-webkit-transform: rotateY(120deg) translateZ(124px)}	
	
.strip .j {background-position: 450px 0;
	   -moz-transform: rotateY(135deg) translateZ(124px);
	-webkit-transform: rotateY(135deg) translateZ(124px)}
	
.strip .k {background-position: 420px 0;
	   -moz-transform: rotateY(150deg) translateZ(124px);
	-webkit-transform: rotateY(150deg) translateZ(124px)}
		
.strip .l {background-position: 390px 0;
	   -moz-transform: rotateY(165deg) translateZ(124px);
	-webkit-transform: rotateY(165deg) translateZ(124px)}	
		
.strip .m {background-position: 360px 0;
	   -moz-transform: rotateY(180deg) translateZ(124px);
	-webkit-transform: rotateY(180deg) translateZ(124px)}		
		
.strip .n {background-position: 330px 0;
	   -moz-transform: rotateY(195deg) translateZ(124px);
	-webkit-transform: rotateY(195deg) translateZ(124px)}
	
.strip .o {background-position: 300px 0;
	   -moz-transform: rotateY(210deg) translateZ(124px);
	-webkit-transform: rotateY(210deg) translateZ(124px)}
	
.strip .p {background-position: 270px 0;
	   -moz-transform: rotateY(225deg) translateZ(124px);
	-webkit-transform: rotateY(225deg) translateZ(124px)}	
	
.strip .q {background-position: 240px 0;
	   -moz-transform: rotateY(240deg) translateZ(124px);
	-webkit-transform: rotateY(240deg) translateZ(124px)}	
	
.strip .r {background-position: 210px 0;
	   -moz-transform: rotateY(255deg) translateZ(124px);
	-webkit-transform: rotateY(255deg) translateZ(124px)}
	
.strip .s {background-position: 180px 0;
	   -moz-transform: rotateY(270deg) translateZ(124px);
	-webkit-transform: rotateY(270deg) translateZ(124px)}
	
.strip .t {background-position: 150px 0;
	   -moz-transform: rotateY(285deg) translateZ(124px);
	-webkit-transform: rotateY(285deg) translateZ(124px)}	
	
.strip .u {background-position: 120px 0;
	   -moz-transform: rotateY(300deg) translateZ(124px);
	-webkit-transform: rotateY(300deg) translateZ(124px)}	
	
.strip .v {background-position: 90px 0;
	   -moz-transform: rotateY(315deg) translateZ(124px);
	-webkit-transform: rotateY(315deg) translateZ(124px)}
	
.strip .w {background-position: 60px 0;
	   -moz-transform: rotateY(330deg) translateZ(124px);
	-webkit-transform: rotateY(330deg) translateZ(124px)}
	
.strip .x {background-position: 30px 0;
	   -moz-transform: rotateY(345deg) translateZ(124px);
	-webkit-transform: rotateY(345deg) translateZ(124px)}
@-moz-keyframes spin {
	from { -moz-transform: rotateY(0)}
	to   { -moz-transform: rotateY(-360deg)}}
	
@-webkit-keyframes spin {
	from { -webkit-transform: rotateY(0)}
    to   { -webkit-transform: rotateY(-360deg)}}
    
@font-face {
    font-family: 'Carlsberg';
    src: local('Carlsberg'), url(../fonts/carlsberg.ttf) format('truetype');
    }
`

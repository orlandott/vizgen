import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import { MdCompareArrows } from "react-icons/md";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { FaReact } from "react-icons/fa";
import htmlToImage from 'html-to-image';
import * as rasterizeHTML from 'rasterizehtml';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



export default class MainPage extends Component {





    constructor (props) {
        super(props);
        this.state = {
          padding: 1,
            format: 'Custom',
            width: 480,
            height: 305,
            backgroundColor : 'rgb(20, 170, 55)',
            widthToShow: '550',
            heightToShow: '350',

            activeDrags: 0,
            deltaPosition: {
              x: 0, y: 0
            },
            controlledPosition: {
              x: -400, y: 200
            },
            tab: '0',
            colors: ['rgb(255, 255, 255)', 'rgb(0, 0, 0)', 'rgb(20, 170, 55)','rgb(247, 238, 106)' ,'rgb(117, 208, 241)'
            ,'rgb(237, 155, 196)' ,'rgb(152, 98, 151)' ,'rgb(190, 210, 118)' ,'rgb(255, 193, 30)', 'rgb(207, 98, 151)','rgb(220, 79, 0)','rgb(56, 96, 170)','rgb(200, 0, 130)'],


            title: '80% des insectes européens ont disparu en trente ans',
            titleColor: 'rgb(255, 255, 255)',
            titleSize: '10',
            titleMargin: '0',
            titleFont: 'crimson',
            rTitle:'255',
            gTitle: '255',
            bTitle:'255',

            footer :'This is a Footer',
            footerColor: 'rgb(255, 255, 255)',
            footerSize :'5',
            rFooter: '255',
            gFooter: '255',
            bFooter: '255',

            logoColor: 'rgb(255, 255, 255)',
            logoSize :'small',
            rLogo: '255',
            gLogo: '255',
            bLogo: '255',



            rMain: '20',
            gMain: '170',

            bMain: '55',


            
    }};


    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
      };
    
      onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags});
      };
    
      onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags});
      };
    
      // For controlled component
      adjustXPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {x, y} = this.state.controlledPosition;
        this.setState({controlledPosition: {x: x - 10, y}});
      };
    
      adjustYPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {controlledPosition} = this.state;
        const {x, y} = controlledPosition;
        this.setState({controlledPosition: {x, y: y - 10}});
      };
    
      onControlledDrag = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}});
      };
    
      onControlledDragStop = (e, position) => {
        this.onControlledDrag(e, position);
        this.onStop();
      };



      handleChange = name => event => {
        console.log(name)
       
           this.setState ({
               ...this.state,
            [name]: event.target.value,
        } ,() => {
          if(name === 'format')
          {
            {event.target.value === 'Instagram'? 
              this.setState({
                width: 480,
                height: 480,
                widthToShow: 1080,
                heightToShow: 1080,
              })
              :
              event.target.value ==='Facebook'?
              this.setState({
                width: 480,
                height: 270,
                widthToShow: 1920,
                heighttoShow: 1080
              })
              :
              event.target.value ==='A4 @ 72dpi'?
              this.setState({
                width: 340,
                height: 480,
                widthToShow: 596,
                heightToShow: 842
              })
              :
              this.setState({
                width: 340,
                height: 480,
                widthToShow: 2480,
                heightToShow: 3508
              })
          
          
          }
          }
        })
      };

      handleSliderChange = name => (event, newValue) => {
        this.setState({
            ...this.state,
            [name]: newValue
          })
      };
      

      handleTabChange = (event, newValue) => {
          this.setState({
              ...this.state,
              tab : newValue,
          });
      }

      setTitleColorSlider =() => {
        this.setState({
          rTitle : this.state.titleColor.split(',')[0].split('(')[1],
          gTitle: this.state.titleColor.split(',')[1],
          bTitle : this.state.titleColor.split(',')[2].split(')')[0],

        })
      }

      setFooterColorSlider =() => {
        this.setState({
          rFooter : this.state.footerColor.split(',')[0].split('(')[1],
          gFooter: this.state.footerColor.split(',')[1],
          bFooter : this.state.footerColor.split(',')[2].split(')')[0],

        })
      }

      setLogoColorSlider =() => {
        this.setState({
          rLogo : this.state.logoColor.split(',')[0].split('(')[1],
          gLogo: this.state.logoColor.split(',')[1],
          bLogo : this.state.logoColor.split(',')[2].split(')')[0],

        })
      }

      setMainColorSlider = ()=> {
        this.setState({
          rMain : this.state.backgroundColor.split(',')[0].split('(')[1],
          gMain: this.state.backgroundColor.split(',')[1],
          bMain : this.state.backgroundColor.split(',')[2].split(')')[0],

        })

      }



      handleColorSliderChange = name => (event, newValue) => {

        this.setState({
          ...this.state,
          [name]: newValue
        }, () => {
          if(name==='rMain')
          {
            var newRed = this.state.backgroundColor
            newRed = newRed.replace(newRed.split(',')[0].split('(')[1], newValue)
            console.log(newRed);
            this.setState({backgroundColor: newRed})
          }
          if(name==='gMain')
          {
            var newGreen = this.state.backgroundColor
            newGreen = newGreen.replace(newGreen.split(',')[1], newValue)
            console.log(newGreen);
            this.setState({backgroundColor: newGreen})
          }
          if(name==='bMain')
          {
            var newBlue = this.state.backgroundColor
            newBlue = newBlue.replace(newBlue.split(',')[2].split(')')[0], newValue)
            console.log(newBlue);
            this.setState({backgroundColor: newBlue})
          }
          if(name==='rTitle')
          {
            var newRed = this.state.titleColor
            newRed = newRed.replace(newRed.split(',')[0].split('(')[1], newValue)
            console.log(newRed);
            this.setState({titleColor: newRed})
          }
          if(name==='gTitle')
          {
            var newGreen = this.state.titleColor
            newGreen = newGreen.replace(newGreen.split(',')[1], newValue)
            console.log(newGreen);
            this.setState({titleColor: newGreen})
          }
          if(name==='bTitle')
          {
            var newBlue = this.state.titleColor
            newBlue = newBlue.replace(newBlue.split(',')[2].split(')')[0], newValue)
            console.log(newBlue);
            this.setState({titleColor: newBlue})
          }
          if(name==='rFooter')
          {
            var newRed = this.state.footerColor
            newRed = newRed.replace(newRed.split(',')[0].split('(')[1], newValue)
            console.log(newRed);
            this.setState({footerColor: newRed})
          }
          if(name==='gFooter')
          {
            var newGreen = this.state.footerColor
            newGreen = newGreen.replace(newGreen.split(',')[1], newValue)
            console.log(newGreen);
            this.setState({footerColor: newGreen})
          }
          if(name==='bFooter')
          {
            var newBlue = this.state.footerColor
            newBlue = newBlue.replace(newBlue.split(',')[2].split(')')[0], newValue)
            console.log(newBlue);
            this.setState({footerColor: newBlue})
          }
          if(name==='rLogo')
          {
            var newRed = this.state.logoColor
            newRed = newRed.replace(newRed.split(',')[0].split('(')[1], newValue)
            console.log(newRed);
            this.setState({logoColor: newRed})
          }
          if(name==='gLogo')
          {
            var newGreen = this.state.logoColor
            newGreen = newGreen.replace(newGreen.split(',')[1], newValue)
            console.log(newGreen);
            this.setState({logoColor: newGreen})
          }
          if(name==='bLogo')
          {
            var newBlue = this.state.logoColor
            newBlue = newBlue.replace(newBlue.split(',')[2].split(')')[0], newValue)
            console.log(newBlue);
            this.setState({logoColor: newBlue})
          }
        })
      }


      downloadPng =() => {
        var node = document.getElementById('fullLable');
        var canvas = document.createElement("canvas");
        canvas.height = node.offsetHeight;
        canvas.width = node.offsetWidth;
        var name = "test.png"
        
        rasterizeHTML.drawHTML(node.outerHTML, canvas)
             .then(function (renderResult) {
                    if (navigator.msSaveBlob) {
                        window.navigator.msSaveBlob(canvas.msToBlob(), name);
                    } else {
                        const a = document.createElement("a");
                        document.body.appendChild(a);
                        a.style = "display: none";
                        a.href = canvas.toDataURL();
                        a.download = name;
                        a.click();
                        document.body.removeChild(a);
                    }
             });
      }

      downloadJPEG = () => {
        console.log('YES');
        htmlToImage.toJpeg(document.getElementById('fullLable'), { quality: 1 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          link.href = dataUrl;
          console.log('YES')
          link.click();
        });
      }

      exportPdf = () => {

        html2canvas(document.querySelector("#fullLable")).then(canvas => {
          //  document.body.appendChild(canvas);  // if you want see your screenshot in body.
           const imgData = canvas.toDataURL('image/png');
           const pdf = new jsPDF();
           pdf.addImage(imgData, 'PNG', 0, 0);
           pdf.save("download.pdf"); 
       });
   
    }

      
    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const classes =this.props;
        const labelColor = this.state.labelColor;
   return (

<PageStyler>
    <Grid container component="main" className="root full-page">
      <Grid  component={Paper} className="forty" square>
        <Paper style={{top: '1rem', left: '1rem'}} square>
                <div className="leftTitle">
                    <p>
                        {this.state.format} {this.state.widthToShow} x {this.state.heightToShow}px {this.state.width>this.state.height ? "(landscape)" : "(portrait)"}
                    </p>
                </div>
            <Paper className='inWindow'>
              <Draggable bounds={{top: 0, left: -72, right: 72, bottom: 75}}  {...dragHandlers}>
                  <div id="fullLable" className="rectangle" style={
                      {
                          width: `${this.state.width}px`,
                          height: `${this.state.height}px`,
                          backgroundColor : `${this.state.backgroundColor}`,
                          padding: `${this.state.padding}px`,

                      } }>
                        <div className='column'>
                          <div className='title' style={
                            {
                              width: `${this.state.Width/10}px`,
                              height : `${this.state.height/10}px`,
                              
                            }
                            }> <p style={
                              {
                                color: `${this.state.titleColor}`,
                                fontSize: `${this.state.titleSize}px`,
                                textAlign: 'center',
                                lineHeight:'2.5rem',
                                marginTop:`${this.state.titleMargin}px`
                              }
                              }>{this.state.title}</p>
                          </div>



                          <div className='footer'>
                            <div style={
                              {
                                display: 'inline-block',
                                
                                width: '50%',
                                margin:`0`,
                                color:`${this.state.footerColor}`,
                                fontSize:`${this.state.footerSize}px`,
                              }
                              }>{this.state.footer}</div>
                              <div style={{
                                display: 'inline-block',
                                width: '50%',
                              }}>
                                  <FaReact style={
                                    {
                                      color:`${this.state.logoColor}`,
                                      position:'absolute',
                                      right: '3%',
                                      width:`${this.state.logoSize==='small'? '20px': this.state.logoSize==='medium'?'30px':'40px'}`,
                                      height:`${this.state.logoSize==='small'? '20px': this.state.logoSize==='medium'?'30px':'40px'}`,
                                    }
                                    } />
                                    </div>
                          </div>
                        </div>
                        
                  </div>
              </Draggable>
            </Paper>
        </Paper>
      </Grid>
      <Grid  container className="sixty">
        
        <Grid item className='tabs'>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={this.state.tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handleTabChange}
                aria-label="Vertical tabs example"
            >
                <Tab value="0" label="Document"  />
                <Tab value="1" label="Title" />
                <Tab label="Footer" value='2' />
                <Tab label="Logo" value='3' />
                <Tab label="Export"  value='4'/>
                <Tab label="Export to PDF"  value='5'/>

            </Tabs>
        </Grid>

            <Grid item style={{
                width: '68%',
                padding: '1rem',
                paddingTop: '0',
                display: `${this.state.tab === "0" ? '' : 'none'}`}}>

            <p className='textDescription' style={{marginTop:'0.2rem'}}>Format</p>
              <FormControl variant="outlined" style={{width:'100%'}}>
                <Select
                  style= {{height:'2.5rem'}}
                
                
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.format}
                  onChange={
                    this.handleChange('format')
                  }
                  
                >
                  <MenuItem value='Custom'>Custom</MenuItem>
                  <MenuItem value='Instagram'>Instagram</MenuItem>
                  <MenuItem value='Facebook'>Facebook event</MenuItem>
                  <MenuItem value='A4 @ 72dpi'>A4 @ 72dpi</MenuItem>
                  <MenuItem value='A4 @ 300dpi'>A4 @ 300dpi</MenuItem>
                </Select>
              </FormControl>
            <p className='textDescription'>Size</p>
            <Grid container>
              <Grid item style={{justifyContent: 'space-between'}} xs={8}>
                <TextField
                disabled={this.state.format!= 'custom'? true : false}
                size="small"
                  label="Width"
                  id="outlined-start-adornment"
                  className=''
                  value={this.state.widthToShow}
                  InputProps={{
                    style: {marginBottom:'10px'},
                    endAdornment: <InputAdornment position="start">px</InputAdornment>,
                  }}
                  variant="outlined"
                />
                <TextField
                disabled={this.state.format!= 'custom'? true : false}
                size="small"
                  label="Length"
                  id="outlined-start-adornment"
                  className=''
                  value={this.state.heightToShow}
                  InputProps={{
                    endAdornment: <InputAdornment position="start">px</InputAdornment>,
                  }}
                  variant="outlined"
                />

              </Grid>
              <Grid item xs={4}>
                  <MdCompareArrows onClick={()=> {
                    var newWidth = this.state.height;
                    var newHeight = this.state.width;
                    var newWidthToShow = this.state.heightToShow;
                    var newHeightToShow = this.state.widthToShow;
                    this.setState({
                      width: newWidth,
                      height: newHeight,
                      widthToShow: newWidthToShow,
                      heightToShow: newHeightToShow
                    })
                  }} style={{width:'1.5rem',height:'1.5rem',marginTop:'2rem',transform: 'rotate(90deg)'}} />
              </Grid>
            </Grid>
              
            <p className='textDescription' style={{marginBottom:'0', marginTop:'1.5rem'}}>Padding</p>
              <Slider
                value={this.state.padding}
                min={0}
                step={1}
                max={100}
                // getAriaValueText={valueLabelFormat}
                // valueLabelFormat={valueLabelFormat}
                onChange={this.handleSliderChange('padding')}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />



            <p className='textDescription'>Backgorund Color</p>


            <Grid container justify='space-between'>
                {this.state.colors.map(value => (
                <Grid key={value} item style={{width:'7%'}}>
                  <div onClick={()=> {
                    this.setState({backgroundColor: value}, ()=> {
                      this.setMainColorSlider();
                    })
                  }} style={{backgroundColor: `${value}`,position: 'relative',borderRadius: '5px', width:'100%', height:'1.5rem', border: '1px solid #aaa'}}/>
                </Grid>
              ))}
            </Grid>

            <Grid container justify='space-between'>
              <Grid item xs={4}>
              <div style={{backgroundColor: `${this.state.backgroundColor}`,marginTop:'1.1rem',borderRadius: '10px', width:'100%', height:'5rem', border: '1px solid #aaa'}}/>
              </Grid>
              <Grid container xs={8} justify='space-between'>
                  <Grid xs={2} justify='center'>
                    <p style={{textAlign:'center'}}>R</p>
                    <p style={{textAlign:'center'}}>G</p>
                    <p style={{textAlign:'center'}}>B</p>
                  </Grid>
                  <Grid item xs={10} style={{paddingTop:'0.6rem'}}>
                    <Slider
                      value={this.state.rMain}
                      min={0}
                      step={1}
                      max={255}
                      // getAriaValueText={valueLabelFormat}
                      // valueLabelFormat={valueLabelFormat}
                      onChange={this.handleColorSliderChange('rMain')}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                    />
                    <Slider
                      value={this.state.gMain}
                      min={0}
                      step={1}
                      max={255}
                      // getAriaValueText={valueLabelFormat}
                      // valueLabelFormat={valueLabelFormat}
                      onChange={this.handleColorSliderChange('gMain')}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                    />
                    <Slider
                      value={this.state.bMain}
                      min={0}
                      step={1}
                      max={255}
                      // getAriaValueText={valueLabelFormat}
                      // valueLabelFormat={valueLabelFormat}
                      onChange={this.handleColorSliderChange('bMain')}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                    />
                  </Grid>
              </Grid>
            </Grid>


            


            </Grid>




            <Grid item style={{
                width: '68%',
                padding: '1rem',
                paddingTop: '0',
                display: `${this.state.tab === "1" ? '' : 'none'}`}}>

            <p className='textDescription' style={{marginTop:'0.2rem'}}>Font</p>
              <FormControl variant="outlined" style={{width:'100%'}}>
                <Select
                  style= {{height:'2.5rem'}}
                
                
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.titleFont}
                  onChange={this.handleChange}
                  
                >
                  <MenuItem value='fuxed'>FUCXED CAPS</MenuItem>
                  <MenuItem value='crimson'>Crimson Text Regular</MenuItem>
                  <MenuItem value='crimsoni'>Crimson Text Italic</MenuItem>
                  <MenuItem value='crimsonsb'>Crimson Text SemiBold</MenuItem>
                  <MenuItem value='crimsonsbi'>Crimson Text SemiBold Italic</MenuItem>
                  <MenuItem value='crimsonb'>Crimson Text Bold </MenuItem>
                  <MenuItem value='crimsonbi'>Crimson Text Bold Italic</MenuItem>
                </Select>
              </FormControl>
            <p className='textDescription'>Text</p>
            <Grid container>
              <Grid item style={{justifyContent: 'space-between'}} xs={12}>
              <TextField
              fullWidth
                id="filled-multiline-static"
                multiline
                rows="4"
                defaultValue="Default Value"
                variant="filled"
                value={this.state.title}
                onChange={this.handleChange('title')}
              />

              </Grid>
            </Grid>
              
            <p className='textDescription' style={{marginBottom:'0', marginTop:'1.5rem'}}>Size</p>
              <Slider
                value={this.state.titleSize}
                min={0}
                step={1}
                max={250}
                // getAriaValueText={valueLabelFormat}
                // valueLabelFormat={valueLabelFormat}
                onChange={this.handleSliderChange('titleSize')}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />

              <p className='textDescription' style={{marginBottom:'0', marginTop:'0.5rem'}}>Margin Top</p>
              <Slider
                value={this.state.titleMargin}
                min={0}
                step={1}
                max={120}
                // getAriaValueText={valueLabelFormat}
                // valueLabelFormat={valueLabelFormat}
                onChange={this.handleSliderChange('titleMargin')}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />


            <p className='textDescription'>Color</p>


            <Grid container justify='space-between'>
            {this.state.colors.map(value => (
                <Grid key={value} item style={{width:'7%'}}>
                  <div onClick={()=> {
                    this.setState({titleColor: value}, ()=> {
                      this.setTitleColorSlider();
                    } )
                  }} style={{backgroundColor: `${value}`,position: 'relative',borderRadius: '5px', width:'100%', height:'1.5rem', border: '1px solid #aaa'}}/>
                </Grid>
              ))}
            </Grid>

            <Grid container justify='space-between'>
              <Grid item xs={4}>
              <div style={{backgroundColor: `${this.state.titleColor}`,marginTop:'1.1rem',borderRadius: '10px', width:'100%', height:'5rem', border: '1px solid #aaa'}}/>
              </Grid>
              <Grid container xs={8} justify='space-between'>
                  <Grid xs={2} justify='center'>
                    <p style={{textAlign:'center'}}>R</p>
                    <p style={{textAlign:'center'}}>G</p>
                    <p style={{textAlign:'center'}}>B</p>
                  </Grid>
                  <Grid item xs={10} style={{paddingTop:'0.6rem'}}>
                    <Slider
                      value={this.state.rTitle}
                      min={0}
                      step={1}
                      max={255}
                      // getAriaValueText={valueLabelFormat}
                      // valueLabelFormat={valueLabelFormat}
                      onChange={this.handleColorSliderChange('rTitle')}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                    />
                    <Slider
                      value={this.state.gTitle}
                      min={0}
                      step={1}
                      max={255}
                      // getAriaValueText={valueLabelFormat}
                      // valueLabelFormat={valueLabelFormat}
                      onChange={this.handleColorSliderChange('gTitle')}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                    />
                    <Slider
                      value={this.state.bTitle}
                      min={0}
                      step={1}
                      max={255}
                      // getAriaValueText={valueLabelFormat}
                      // valueLabelFormat={valueLabelFormat}
                      onChange={this.handleColorSliderChange('bTitle')}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                    />
                  </Grid>
              </Grid>
            </Grid>


            


            </Grid>






            <Grid item style={{
                width: '68%',
                padding: '1rem',
                paddingTop: '0',
                display: `${this.state.tab === "2" ? '' : 'none'}`}}>

            <p className='textDescription'>Text</p>
            <Grid container>
              <Grid item style={{justifyContent: 'space-between'}} xs={12}>
              <TextField
              fullWidth
                id="filled-multiline-static"
                multiline
                rows="1"
                defaultValue="Default Value"
                variant="filled"
                value={this.state.footer}
                onChange={this.handleChange('footer')}
              />

              </Grid>
            </Grid>
              
            <p className='textDescription' style={{marginBottom:'0', marginTop:'1.5rem'}}>Size</p>
              <Slider
                value={this.state.footerSize}
                min={0}
                step={1}
                max={30}
                // getAriaValueText={valueLabelFormat}
                // valueLabelFormat={valueLabelFormat}
                onChange={this.handleSliderChange('footerSize')}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />


            <p className='textDescription'>Color</p>


            <Grid container justify='space-between'>
            {this.state.colors.map(value => (
                <Grid key={value} item style={{width:'7%'}}>
                  <div onClick={()=> {
                    this.setState({footerColor: value}, ()=> {
                      this.setFooterColorSlider();
                    } )
                  }} style={{backgroundColor: `${value}`,position: 'relative',borderRadius: '5px', width:'100%', height:'1.5rem', border: '1px solid #aaa'}}/>
                </Grid>
              ))}
            </Grid>

            <Grid container justify='space-between'>
              <Grid item xs={4}>
              <div style={{backgroundColor: `${this.state.footerColor}`,marginTop:'1.1rem',borderRadius: '10px', width:'100%', height:'5rem', border: '1px solid #aaa'}}/>
              </Grid>
              <Grid container xs={8} justify='space-between'>
                  <Grid xs={2} justify='center'>
                    <p style={{textAlign:'center'}}>R</p>
                    <p style={{textAlign:'center'}}>G</p>
                    <p style={{textAlign:'center'}}>B</p>
                  </Grid>
                  <Grid item xs={10} style={{paddingTop:'0.6rem'}}>
                    <Slider
                      value={this.state.rFooter}
                      min={0}
                      step={1}
                      max={255}
                      // getAriaValueText={valueLabelFormat}
                      // valueLabelFormat={valueLabelFormat}
                      onChange={this.handleColorSliderChange('rFooter')}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                    />
                    <Slider
                      value={this.state.gFooter}
                      min={0}
                      step={1}
                      max={255}
                      // getAriaValueText={valueLabelFormat}
                      // valueLabelFormat={valueLabelFormat}
                      onChange={this.handleColorSliderChange('gFooter')}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                    />
                    <Slider
                      value={this.state.bFooter}
                      min={0}
                      step={1}
                      max={255}
                      // getAriaValueText={valueLabelFormat}
                      // valueLabelFormat={valueLabelFormat}
                      onChange={this.handleColorSliderChange('bFooter')}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                    />
                  </Grid>
              </Grid>
            </Grid>


            


            </Grid>




            <Grid item style={{
                width: '68%',
                padding: '1rem',
                paddingTop: '0',
                display: `${this.state.tab === "3" ? '' : 'none'}`}}>

            <p className='textDescription'>Size</p>
            <Grid container>
              <Grid item style={{justifyContent: 'space-between'}} xs={12}>
                <RadioGroup aria-label="position" name="position" value={this.state.logoSize} onChange={this.handleChange('logoSize')} row>
                  <FormControlLabel
                    value="small"
                    control={<Radio color="primary" />}
                    label="Small"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="medium"
                    control={<Radio color="primary" />}
                    label="Medium"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="large"
                    control={<Radio color="primary" />}
                    label="Large"
                    labelPlacement="end"
                  />
                </RadioGroup>
        

              </Grid>
            </Grid>
            
            
            <p className='textDescription'>Color</p>

            <Grid container justify='space-between'>
            {this.state.colors.map(value => (
                <Grid key={value} item style={{width:'7%'}}>
                  <div onClick={()=> {
                    this.setState({logoColor: value}, ()=> {
                      this.setLogoColorSlider();
                    } )
                  }} style={{backgroundColor: `${value}`,position: 'relative',borderRadius: '5px', width:'100%', height:'1.5rem', border: '1px solid #aaa'}}/>
                </Grid>
              ))}
            </Grid>

            <Grid container justify='space-between'>
              <Grid item xs={4}>
              <div style={{backgroundColor: `${this.state.logoColor}`,marginTop:'1.1rem',borderRadius: '10px', width:'100%', height:'5rem', border: '1px solid #aaa'}}/>
              </Grid>
              <Grid container xs={8} justify='space-between'>
                  <Grid xs={2} justify='center'>
                    <p style={{textAlign:'center'}}>R</p>
                    <p style={{textAlign:'center'}}>G</p>
                    <p style={{textAlign:'center'}}>B</p>
                  </Grid>
                  <Grid item xs={10} style={{paddingTop:'0.6rem'}}>
                    <Slider
                      value={this.state.rLogo}
                      min={0}
                      step={1}
                      max={255}
                      // getAriaValueText={valueLabelFormat}
                      // valueLabelFormat={valueLabelFormat}
                      onChange={this.handleColorSliderChange('rLogo')}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                    />
                    <Slider
                      value={this.state.gLogo}
                      min={0}
                      step={1}
                      max={255}
                      // getAriaValueText={valueLabelFormat}
                      // valueLabelFormat={valueLabelFormat}
                      onChange={this.handleColorSliderChange('gLogo')}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                    />
                    <Slider
                      value={this.state.bLogo}
                      min={0}
                      step={1}
                      max={255}
                      // getAriaValueText={valueLabelFormat}
                      // valueLabelFormat={valueLabelFormat}
                      onChange={this.handleColorSliderChange('bLogo')}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                    />
                  </Grid>
              </Grid>
            </Grid>


            


            </Grid>




            <Grid item style={{
                width: '68%',
                padding: '1rem',
                paddingTop: '0',
                display: `${this.state.tab === "4" ? '' : 'none'}`}}>

            <Button style={{marginTop:'6rem',marginBottom:'2rem'}} onClick={this.downloadJPEG} fullWidth variant="contained">EXPORT TO JPEG</Button>
            <Button fullWidth variant="contained" onClick={this.downloadPng}>EXPORT TO PNG</Button>

            </Grid>


            <Grid item style={{
                width: '68%',
                padding: '1rem',
                paddingTop: '0',
                display: `${this.state.tab === "5" ? '' : 'none'}`}}>

            <Button style={{marginTop:'8rem',marginBottom:'2rem'}} onClick={this.exportPdf} fullWidth variant="contained">EXPORT TO PDF</Button>

            </Grid>

            
          
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
    width: 50%;
    margin :5rem;
    margin-top :4rem;
}
.sixty {
    width: 35%;
    margin-top :4rem;
    box-shadow: 1px 1px 1px 1px #999999;

}
.root {
    height: '100vh';
  }
  .paper {
    margin-top: 46px;
    margin-left:40px;
    flex-direction: column;
  }

  .textDescription {
    font-size:0.8rem;
    color: #333333;
  }

  .leftTitle {
    background-color: #444444;
    color : #ffeeff;
}
.leftTitle p {
    margin: 0;
}

.inWindow {
    display: flex;
    width: 100%;
    height: 30rem;
    justify-content: center;
}

.tabs {
  width: 32%;
}
  
  
  .rectangle {
      cursor : all-scroll;
      display: flex;
      overflow: hidden;
      height: 41vh;
      justify-content: center;
  }

  .column{
    flex-direction: column;
    align-content: space-between;
    width: 100%;

    
  }

  .footer {
    flex-direction: row;
    justify-content: space-between;
    position:absolute;
    width: 100%;
    bottom: 15%;  }
    
@font-face {
	font-family:'FUCXED CAPS';
	src: local('FUCXEDCAPSLatin-Regular'), url('../fonts/FUCXEDCAPSLatin-Regular.otf') format('otf'), url('../fonts/FUCXEDCAPSLatin-Regular.woff') format('woff'), url('./fonts/FUCXEDCAPSLatin-Regular.woff2') format('woff2');
	font-weight: normal;
	font-style: normal;
	unicode-range: U+0000-00FF;
}
@font-face {
  font-family: 'Crimson Text Regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Crimson Text Regular'), local('CrimsonText-Regular'), url('../fonts/CrimsonText/CrimsonText-Regular.ttf') format('truetype'), url(https://fonts.gstatic.com/s/crimsontext/v9/wlp2gwHKFkZgtmSR3NB0oRJfbwhTIfFd3A.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Crimson Text Italic';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: local('Crimson Text Italic'), local('CrimsonText-Italic'), url('../fonts/CrimsonText/CrimsonText-Italic.ttf') format('truetype'), url(https://fonts.gstatic.com/s/crimsontext/v9/wlpogwHKFkZgtmSR3NB0oRJfajhRK_Z_3rhH.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Crimson Text SemiBold';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('Crimson Text SemiBold'), local('CrimsonText-SemiBold'), url('../fonts/CrimsonText/CrimsonText-SemiBold.ttf') format('truetype'), url(https://fonts.gstatic.com/s/crimsontext/v9/wlppgwHKFkZgtmSR3NB0oRJXsCxGDNNQ9rJPfw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Crimson Text SemiBold Italic';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: local('Crimson Text SemiBold Italic'), local('CrimsonText-SemiBoldItalic'), url('../fonts/CrimsonText/CrimsonText-SemiBoldItalic.ttf') format('truetype'), url(https://fonts.gstatic.com/s/crimsontext/v9/wlprgwHKFkZgtmSR3NB0oRJfajCOD-NS_LVtfaKv.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Crimson Text Bold';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Crimson Text Bold'), local('CrimsonText-Bold'), url('../fonts/CrimsonText/CrimsonText-Bold.ttf') format('truetype'), url(https://fonts.gstatic.com/s/crimsontext/v9/wlppgwHKFkZgtmSR3NB0oRJX1C1GDNNQ9rJPfw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Crimson Text Bold Italic';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: local('Crimson Text Bold Italic'), local('CrimsonText-BoldItalic'), url('../fonts/CrimsonText/CrimsonText-BoldItalic.ttf') format('truetype'), url(https://fonts.gstatic.com/s/crimsontext/v9/wlprgwHKFkZgtmSR3NB0oRJfajDqDuNS_LVtfaKv.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`
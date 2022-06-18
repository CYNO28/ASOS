import React from 'react'
import styles from '../components/Navbar.module.css'
import { IconButton, Input, InputGroup, InputRightElement} from '@chakra-ui/react'
import { SearchIcon} from '@chakra-ui/icons'
import { FaRegHeart ,FaRegQuestionCircle,FaShoppingBag, FaUser, FaUserAlt } from 'react-icons/fa'
import {BsChatLeftText} from 'react-icons/bs'
import {Link} from 'react-router-dom'
 
const Navbar = ( ) => {


  return (
    <div>
          
              <div className={styles.firstdivwithlogo}>  
               
                        <div className={styles.firstdiinsidediv}>
                              
                            <Link to="/marketplace" className={styles.firstdiinsideA}>Marketplace</Link>
                              
                        </div>
                            
                        <div    className={styles.firstdiinsideigmgdiv} style={{paddingTop:"5px"}}>
                            
                        <Link to="/help"  className={styles.firstdiinsideA} >Help & FAQs</Link>
                          
                        </div>

                        <div className={styles.firstdiinsideigmgdiv}>
          
                            <img src="https://p.kindpng.com/picc/s/192-1929235_indian-flag-button-india-flag-button-png-transparent.png" className={styles.firstdivImg} alt="" srcset="" />
                            
                        </div>

               </div>

               <div  className={styles.secondDiv}>
                 
                    <Link to="/home"  className={styles.secondLink}>asos</Link> 
                    
                    <span className={styles.secondspan}>|</span>
                   
                    <Link to="/women" className={styles.secondspansecnd}>WOMEN</Link>
                   
                    <span className={styles.secondspan}>|</span>
               
                    <Link to="/men" className={styles.secondspansecnd}>MEN</Link>
               
                    <span className={styles.secondspan}>|</span>


                 
                    <InputGroup size='md' width='800px' className={styles.secondInputGroup}>
                            <Input
                                pr='5.5rem'
                                placeholder='Search for items and brands'
                                className={styles.secondInput}
                                // style={{fontWeight:'1000',color:"#2d2d2d",marginBottom:"8px",borderRadius:"25px",fontFamily:"'Josefin Slab', serif",fontSize:"15px",letterSpacing:"2px",width:"100%",}}
                            />
                            <InputRightElement width='4.0rem'>
                                
                                <IconButton  className={styles.secondIconBtn}//add hover to it
                                colorScheme='dark'
                                size='sm'
                                icon={<SearchIcon className={styles.secondSearchIcon}/>}/>
                            
                            </InputRightElement>
                    </InputGroup>
                
                     <div className={styles.dropdown}>

                        <FaUserAlt  className={styles.secondICOn1}/>
                        <div className={styles.dropdowncontent}>
                             
                            <div>
                                 <Link to='#'className={styles.userA}>Sign In <span> | </span></Link>
                                 <Link to='#' className={styles.userA}>Join</Link>
                            </div>
                              

                            <div style={{paddingTop:"20px"}}>
                              <Link to="#" className={styles.usera} ><FaUser style={{color:"black",marginRight:"20px",marginLeft:"20px",fontSize:"22px",paddingTop:"10px"}}/>My Account</Link>
                            </div>

                           

                            <div style={{paddingTop:"20px"}}>
                              <Link to="#" className={styles.usera}><FaShoppingBag style={{color:"black",marginRight:"20px",marginLeft:"20px",fontSize:"22px",paddingTop:"10px"}}/>My Orders</Link>
                            </div>


                            <div style={{paddingTop:"20px"}}>
                              <Link to="#" className={styles.usera}><FaRegQuestionCircle style={{color:"black",marginRight:"20px",marginLeft:"20px",fontSize:"22px",paddingTop:"10px"}}/>Returns Information</Link>
                            </div>

                            <div style={{paddingTop:"20px",paddingBottom:"20px"}}>
                              <Link to="#" className={styles.usera}> <BsChatLeftText style={{color:"black",marginRight:"20px",marginLeft:"20px",fontSize:"22px",paddingTop:"10px"}}/>Contact Preferences</Link>
                            </div>

                        </div>
                     </div>
                    
                    
                      <Link to="/likeProduct"><FaRegHeart className={styles.secondICOn}/></Link>
                      
                      
                      <Link to="/cart"><FaShoppingBag  className={styles.secondICOn}/></Link>

          
               
               </div>

              
               <div  className={styles.thirdDiv}>
                  <Link to="/women" style={{marginLeft:"300px"}} className={styles.thirdbtn}>WOMEN</Link>
                   <h1 className={styles.thirdH1}> SALE: UP TO 70% OFF!<span style = {{display: 'block'}}>IT'S CALLED BIG DISCOUNT ENERGY</span></h1>
                  <Link to="/men" style={{marginRight:"300px"}} className={styles.thirdbtn}>MEN</Link>
                 
               </div>  

























 
                {/* <div className={styles.container}>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/archive/oct-2021/microsoftteams-image-(10).png" className={styles.containerImg} alt="" />
                    <div className={styles.centered}>This is ASOS</div>
                    <div className={styles.centered1}>ASOS DESIGN and 850+ brands </div>


                    <div style={{display: 'flex'}} className={styles.centered2}>

                        <div>
                          <Link to='/women' className={styles.imgbtn}>SHOP WOMEN</Link>
                       
                        </div>

                        <div>
                        <Link to='/men' className={styles.imgbtn}>SHOP MEN</Link>
                        </div>
                         
                          
                    </div>
               
                </div>

                <div  className={styles.forthdiv}>
                   <h2>EASY WORLDWIDE DELIVERY <span style = {{display: 'block',fontSize:"12px"}}>*minimum spends apply</span></h2>
                   <h2>ASOS DESIGN and 850+ <span style = {{display: 'block',fontSize:"12px"}}>brands</span></h2>
                </div> */}

               
  
       </div>
  )
}

export default Navbar
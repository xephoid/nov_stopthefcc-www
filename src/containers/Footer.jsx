import React, {Component}  from 'react'
import Logo from './Logo.jsx'

class  Footer extends  Component {
        constructor(props){
            super(props);
            this.state = {
                orderedLogos: [
                    {name: "CA Clean Money Action Fund", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/41fa8bce-c0c2-4b86-a9bd-5dc9c0d3cec8/CCMAF Logo.png"},
                    {name: "Center For Media Justice", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/f8807302-595b-480c-b0eb-a44453606a1d/CMJ logo hi-res.jpg"},
                    {name: "Climate Hawks Vote", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/afcdfbb2-115e-42e7-94e0-a82f78f50e94/CHV Logo2.jpg"},
                    {name: "Color Of Change", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/285d4ce4-d080-4bc7-baa1-801d7bf38f63/colorofchange.png"},
                    {name: "Common Dreams", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/3dc1959d-db1a-4f84-af44-edda916f14dc/CD_stacked_white.jpg"},
                    {name: "Daily Kos", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/c7679f4c-3ee7-4670-84a5-b0c4f2f2e2dc/DailyKosLogo.png"},
                    {name: "Friends of the Earth Action", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/fbaafaa8-32cd-423a-818e-07566dc8d807/FoeAction.png"},
                    {name: "OpenMedia", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/0378fb59-618c-4389-a2ba-3fb1d8562f67/open-media.jpg"},
                    {name: "Other 98%", url: "/images/o98-black-horizontal.png"},
                    {name: "Progress America", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/8e3e64b3-9932-4b4a-8f80-05d56c6510f7/progress-america.png"},
                    {name: "Public Citizen", url: "/images/publiccitizen.jpg"},
                    {name: "RootsAction", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/e596fb0d-df61-44c7-82c3-20ea65ad5052/RootsAction.png"},
                    {name: "Watchdog.net", url: "https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/1f78005d-52c9-47c8-80b9-bd6734fd5fde/watchdog_small.png"},
                ]
            }
        }
        componentDidMount(){
      // const swaps = [
      //   '6CPDA','6CHV', '6CommonCause', '6CorporateAcct', '6Kos', '6DemandProgress','6DFA','6FOE', '6Greenpeace', '6OpenMedia', '6PeoplesAction', '6PFAW','6ProgressAmerica','6PCAF','6SumOfUs', '6Nation', '6Watchdog'
      // ]
      
      // const includeBusinessBox = swaps.includes(this.state.source)

      // if(includeBusinessBox){
      //   this.setState({
      //     includeBusinessBox: includeBusinessBox
      //   })
      // }
    
      
 
        }

   
        // if(this.state.allLogos){
        //    let orderedLogos = this.state.allLogos.sort(function(a, b) {
        //        let firstLogoName = a.name.toLowerCase();
        //        let secondLogoName = b.name.toLowerCase();
        //         if(firstLogoName.indexOf('the ') === 0) {
        //             firstLogoName =  firstLogoName.substring(4);
        //         }

        //         if(secondLogoName.indexOf('the ') === 0){
        //             secondLogoName = secondLogoName.substring(4);
        //         }

        //         if (/\d/.test(firstLogoName)){
        //             return -1 
        //         } else if(/\d/.test(secondLogoName)){
        //             return 1
        //         } else {
        //             return (firstLogoName < secondLogoName) ? -1 : (firstLogoName > secondLogoName) ? 1 : 0;
        //         }     
        //     })
            
          
        // }
        

        render(){
           
            let logos = null
            let logosText = ""
            let tweet = "https://twitter.com/intent/tweet?text=It%27s%20time%20for%20Congress%20to%20pass%20the%20%23SavetheNet%20Act%2C%20which%20will%20restore%20strong%20%23NetNeutrality%20protections%20supported%20by%20an%20overwhelming%20majority%20of%20Americans.%20Tell%20your%20lawmakers%20to%20stand%20with%20their%20constituents%2C%20not%20Big%20Cable%2C%20by%20backing%20this%20bill%3A%20https%3A%2F%2Fstopthefcc.net%2F"
            
            if(this.props.showLogos || !this.props.isMobile){
                    logos = this.state.orderedLogos.map(({name, url}) => {
                        logosText += name + ',';
                        return <Logo key={name} alt={name} src={url}/>
                        } 
                    )
            }
            
            return (
                <div id="footer">
                    <div className="footer">
                        <div className="logos-unit">
                            <div className="built-by">
                                <p><br/><br/>Built by:</p> <img src="https://cdn.tipe.io/5ae9f2a4323fc90013cb4dfa/ffb2acc8-9b36-40ef-bb9a-deb6ecb5ee55/demand-progress.png"/>
                            </div>
                            <div className="logos" style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center"}}>
                                {logos}
                            </div>
                            <div className="media-press-social">
                                <div className="social-media">
                                    <a className="twitter" href={tweet} target="_blank">
                                        <img src="images/twitter_white.svg" />
                                        <span>Share on twitter</span>
                                    </a>
                                    <a className="facebook" href="https://www.facebook.com/sharer.php?u=https://www.stopthefcc.net/" target="_blank">
                                        <img src="images/facebook_white.svg" />
                                        <span>Share on facebook</span>
                                    </a>
                                </div> 
                                <div className="press-inquiries">
                                    <h3>For Press inquiries, please contact us at:</h3>
                                    <p>
                                        <a className="no-em" href="tel:1-202-681-7582">202-681-7582</a> <span style={{ color: 'white' }}>or</span> <a href="mailto:press@demandprogress.org">press@demandprogress.org</a>
                                    </p>
    
                                    <br/>
                                    <p>
                                        <a href="https://demandprogress.org/privacy-policy/" target="_blank">Our privacy policy</a>
                                    </p>
                                </div>        
                            </div>
                            <div className="orgs">{logosText}</div>
                        </div>
                    </div>
                </div>);
        }
        
    }

    export default Footer;
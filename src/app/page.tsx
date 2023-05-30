"use client"
import ReactFullpage from '@fullpage/react-fullpage';
import Main from "@/app/pages/Main/Main";

const Home = () => {
    // const scrollRef = useRef(null);
    // useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });


    return (
        // @ts-ignore
        <ReactFullpage
            //fullpage options
            licenseKey={'YOUR_KEY_HERE'}
            scrollingSpeed={1000} /* Options here */

            render={({state, fullpageApi}) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <Main/>
                        </div>
                        <div className="section">
                            <p>Section 2</p>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    )
}

export default Home
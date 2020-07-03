import React,{useState, useRef} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import '../css/Main.css';
import Across from '../pics/AcrossDisciplines.jpg';
import BigIdea from '../pics/BigIdea.jpg';
import Details from '../pics/Details.jpg';
import Ethics from '../pics/Ethics.jpg';
import Language from '../pics/LanguageOfDiscipline.jpg';
import Multiple from '../pics/MultiplePerspectives.jpg';
import OverTime from '../pics/OverTime.jpg';
import Patterns from '../pics/Patterns.jpg';
import Rules from '../pics/Rules.jpg';
import Trends from '../pics/Trends.jpg';
import Unanswered from '../pics/UnansweredQs.jpg';
import Origin from '../pics/Origin.jpg';
import Contribution from '../pics/Contribution.jpg';
import Parallel from '../pics/Parallell.jpg';
import Convergence from '../pics/Convergence.jpg';
import Paradox from '../pics/Paradox.jpg';
import box from '../pics/whitebox.jpg';
// import Logo from '../pics/jtelogo.png';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import FadeIn from 'react-fade-in';
import { Button, Modal } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Pdf from '../pics/D&C_Defs.pdf';
import Pdf2 from '../pics/Imperatives_Defs.pdf';

export default () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);
    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const[l1Think, setL1Think] = useState("_______");
    const[l2Think, setL2Think] = useState("_______");
    const[l3Think, setL3Think] = useState("_______");
    const[resource1, setResource1] = useState("_______");
    const[resource2, setResource2] = useState("_______");
    const[resource3, setResource3] = useState("_______");
    const[product1, setProduct1] = useState("_______");
    const[product2, setProduct2] = useState("_______");
    const[product3, setProduct3] = useState("_______");
    const[Icon1, setIcon1] = useState(box);
    const[Icon2, setIcon2] = useState(box);
    const[Icon3, setIcon3] = useState(box);
    const[Icon4, setIcon4] = useState('');
    const[subject, setSubject] = useState("_______");
    const[parameters, setParameters] = useState("");
    const[imps, setImps] = useState(false);
    const[isOpen, setIsOpen] = useState(false);
    const[chosen, setChosen] = useState();
    const[text, setText] = useState('');
    const[isInEditMode, setIsInEditMode] = useState(false);

    // level 1 Thinking Skills //
    const L1ThinkSkills = ["list", "define", "state", "summarize", "describe", "discuss", "explain", "identify", "paraphrase", "compare & contrast", "sequence", "recognize"];
    // level 2 Thinking Skills //
    const L2ThinkSkills = ["compare & contrast","compare & contrast", "gather evidence to support of", "categorize", "support","support", "interpret", "examine", "question", "prove", "defend"];
    // level 3 Thinking Skills //
    const L3ThinkSkills = ["compare & contrast", "interpret", "differentiate", "prove", "judge", "determine the relevance of", "note ambiguity of", "state & test assumptions of", 
                            "redesign", "add to", "gather evidence to support of", "question", "evaluate", "defend"];
    // All resources //
    const Resources = ["a textbook", "an encyclopedia", "a library book", "a magazine", "a newspaper", "an interview", "an expert", "a website", "an online encyclopedia", 
                        "a journal", "an article", "Wikipedia", "an outline", "a video", "a novel"];
    // All products //
    const Products = ["a chart", "a drawling", "a timeline", "a diagram", "a graphic organizer", "a comic", "a map", "a book cover", "a poster", "a museum exhibit", 
                        "a mobile", "a sculpture", "an art gallery", "a debate", "a panel discussion", "a lesson taught to the class", "a report", "a play", "a press conference", 
                        "a TV show", "a monologue", "a movie review", "a song", "a powerpoint", "Google slides", "a photo essay", "a news report", "a webpage", "a persuasive essay", 
                        "a letter", "a children's story", "a poem", "a diary entry", "a reader's theater", "a game", "a puzzle", "a paragraph", "a travelogue"];
    // level 1 Icons no content imperatives//
    const Icons1 = [Language, Details, Patterns, Rules, Ethics, BigIdea, Multiple, OverTime];
    // level 1 Icons with content imperatives//
    const Icons12 = [Language, Details, Patterns, Rules, Ethics, BigIdea, Multiple, OverTime, Origin, Contribution];
    // level 2 Icons no content imperatives //
    const Icons2 = [Trends, Unanswered, Rules, Patterns, OverTime, Multiple, Language, Ethics, Details, BigIdea];
    // level 2 Icons with content imperatives//
    const Icons22 = [Trends, Unanswered, Rules, Patterns, OverTime, Multiple, Language, Ethics, Details, BigIdea, Origin, Contribution];

    // Icon combos for level 3  with no content imperatives //
    const Level3Combo = 
    [[Trends,Multiple,"from"],[Trends,OverTime,""],[Trends,Rules,"in the"],[Trends,Ethics,"of"],[Trends,Across,""],[Language,Rules,"in the"],[Language,OverTime,""],[Language,Across,""], 
    [Language,Multiple,"of"],[Language,Trends,""],[Language,Patterns,""],[Language,Ethics,"within the"], [Details,Rules,"in the"],[Details,Patterns,"in the"],[Details,Language,"in the"],[Details,Trends,"in the"], 
    [Details,Unanswered,"in the"],[Details,Ethics,"in the"],[Details,Multiple,"from"], [Details,OverTime,""],[Details,Across,""],[Patterns,Language,"in"],[Patterns,Details,"in the"],[Patterns,Rules,"in the"], 
    [Patterns,Trends,"in the"],[Patterns,BigIdea,"of"],[Patterns,Unanswered,"of"],[Patterns,Multiple,"from"],[Patterns,Multiple,"in"], [Patterns,OverTime,""],[Patterns,Ethics,"of"],[Rules,Language,"in the"],[Rules,Details,"in the"],[Rules,Patterns,"in the"], 
    [Rules,Trends,"in the"],[Rules,Unanswered,"of"],[Rules,Multiple,"from"],[Rules,Multiple,"in"],[Rules,OverTime,""],[Rules,Across,""],[Rules,Ethics,"of"],[Rules,Ethics,"within the"],[Ethics,OverTime,""],[Ethics,Language,"in the"],[Ethics,Details,"in the"], 
    [Ethics,Patterns,"in the"],[Ethics,Trends,"in the"],[Ethics,Rules,"in the"],[Ethics,BigIdea,"within"],[Ethics,Across,""],[Ethics,Multiple,"from"],[Ethics,Unanswered,"in"],[Unanswered,Ethics,"related to"],[Unanswered,BigIdea,"about the"],[Unanswered,Details,"about the"], 
    [Unanswered,Patterns,"about the"],[Unanswered,Rules,"about the"],[Unanswered,Trends,"about the"],[Unanswered,Ethics,"about the"],[Unanswered,Language,"about the"],[Unanswered,OverTime,""],[Unanswered,Across,""],[Unanswered,Multiple,"from"], 
    [BigIdea,Patterns,"of the"],[BigIdea,Rules,"of the"],[BigIdea,Details,"of the"],[BigIdea,Trends,"of the"],[BigIdea,Language,"of the"],[BigIdea,Ethics,"of the"],[BigIdea,OverTime,""],[BigIdea,Multiple,"from"],[BigIdea,Across,""], 
    [Multiple,"",""],[OverTime,"",""],[Across,"",""],[Trends,"",""],[Unanswered,"",""],[Rules,"",""],[Patterns,"",""],[Multiple,"",""],[Language,"",""],[Ethics,"",""],[Details,"",""],[BigIdea,"",""],
    [Multiple,"",""],[OverTime,"",""],[Across,"",""],[Trends,"",""],[Unanswered,"",""],[Rules,"",""],[Patterns,"",""],[Multiple,"",""],[Language,"",""],[Ethics,"",""],[Details,"",""],[BigIdea,"",""],
    [Multiple,"",""],[OverTime,"",""],[Across,"",""],[Trends,"",""],[Unanswered,"",""],[Rules,"",""],[Patterns,"",""],[Multiple,"",""],[Language,"",""],[Ethics,"",""],[Details,"",""],[BigIdea,"",""]];
    // Icon combos for level 3  with content imperatives //
    const Level3Combo2 = 
    [[Trends,Multiple,"from"],[Trends,OverTime,""],[Trends,Rules,"in the"],[Trends,Ethics,"of"],[Trends,Across,""],[Language,Rules,"in the"],[Language,OverTime,""],[Language,Across,""], 
    [Language,Multiple,"of"],[Language,Trends,""],[Language,Patterns,""],[Language,Ethics,"within the"], [Details,Rules,"in the"],[Details,Patterns,"in the"],[Details,Language,"in the"],[Details,Trends,"in the"], 
    [Details,Unanswered,"in the"],[Details,Ethics,"in the"],[Details,Multiple,"from"], [Details,OverTime,""],[Details,Across,""],[Patterns,Language,"in"],[Patterns,Details,"in the"],[Patterns,Rules,"in the"], 
    [Patterns,Trends,"in the"],[Patterns,BigIdea,"of"],[Patterns,Unanswered,"of"],[Patterns,Multiple,"from"],[Patterns,Multiple,"in"], [Patterns,OverTime,""],[Patterns,Ethics,"of"],[Rules,Language,"in the"],[Rules,Details,"in the"],[Rules,Patterns,"in the"], 
    [Rules,Trends,"in the"],[Rules,Unanswered,"of"],[Rules,Multiple,"from"],[Rules,Multiple,"in"],[Rules,OverTime,""],[Rules,Across,""],[Rules,Ethics,"of"],[Rules,Ethics,"within the"],[Ethics,OverTime,""],[Ethics,Language,"in the"],[Ethics,Details,"in the"], 
    [Ethics,Patterns,"in the"],[Ethics,Trends,"in the"],[Ethics,Rules,"in the"],[Ethics,BigIdea,"within"],[Ethics,Across,""],[Ethics,Multiple,"from"],[Ethics,Unanswered,"in"],[Unanswered,Ethics,"related to"],[Unanswered,BigIdea,"about the"],[Unanswered,Details,"about the"], 
    [Unanswered,Patterns,"about the"],[Unanswered,Rules,"about the"],[Unanswered,Trends,"about the"],[Unanswered,Ethics,"about the"],[Unanswered,Language,"about the"],[Unanswered,OverTime,""],[Unanswered,Across,""],[Unanswered,Multiple,"from"], 
    [BigIdea,Patterns,"of the"],[BigIdea,Rules,"of the"],[BigIdea,Details,"of the"],[BigIdea,Trends,"of the"],[BigIdea,Language,"of the"],[BigIdea,Ethics,"of the"],[BigIdea,OverTime,""],[BigIdea,Multiple,"from"],[BigIdea,Across,""], 
    [Multiple,"",""],[OverTime,"",""],[Across,"",""],[Trends,"",""],[Unanswered,"",""],[Rules,"",""],[Patterns,"",""],[Multiple,"",""],[Language,"",""],[Ethics,"",""],[Details,"",""],[BigIdea,"",""],
    [Multiple,"",""],[OverTime,"",""],[Across,"",""],[Trends,"",""],[Unanswered,"",""],[Rules,"",""],[Patterns,"",""],[Multiple,"",""],[Language,"",""],[Ethics,"",""],[Details,"",""],[BigIdea,"",""],
    [Multiple,"",""],[OverTime,"",""],[Across,"",""],[Trends,"",""],[Unanswered,"",""],[Rules,"",""],[Patterns,"",""],[Multiple,"",""],[Language,"",""],[Ethics,"",""],[Details,"",""],[BigIdea,"",""],
    [Origin,Language,"of the"],[Origin,Details,"of the"],[Origin,Patterns,"of the"],[Origin,Rules,""],[Origin,Trends,"of the"],[Origin,Unanswered,"of the"],[Origin,Ethics,"of the"],[Origin,BigIdea,"of the"],[Origin,OverTime,""],[Origin,Across,""],
    [Contribution,Language,"of the"],[Contribution,Details,"of the"],[Contribution,Patterns,"of the"],[Contribution,Rules,"of the"],[Contribution,Trends,"of the"],[Contribution,Ethics,"of the"],[Contribution,Unanswered,"of the"],[Contribution,BigIdea,"of the"],
    [Contribution,Multiple,"of the"],[Contribution,OverTime,""],[Contribution,Across,""],[Parallel,Language,"within the"],[Parallel,Details,"within the"],[Parallel,Rules,"within the"],[Parallel,Patterns,"within the"],[Parallel,Trends,"within the"],[Parallel,Unanswered,"within the"],
    [Parallel,Ethics,"within the"],[Parallel,BigIdea,"within the"],[Parallel,Multiple,"within the"],[Parallel,OverTime,""],[Parallel,Across,""],[Convergence,Language,"of the"],[Convergence,Details,"of the"],[Convergence,Patterns,"of the"],[Convergence,Rules,"of the"],
    [Convergence,Trends,"of the"],[Convergence,Unanswered,"of the"],[Convergence,Ethics,"of the"],[Convergence,BigIdea,"of the"],[Convergence,Multiple,"of"],[Convergence,OverTime,""],[Convergence,Across,""],[Paradox, Language,"within the"],
    [Paradox,Details,"within the"],[Paradox,Patterns,"within the"],[Paradox,Rules,"within the"],[Paradox,Trends,"within the"],[Paradox,Unanswered,"within the"],[Paradox,Ethics,"within the"],[Paradox,BigIdea,"within the"],[Paradox,Multiple,"within the"],[Paradox,OverTime,""],[Paradox,Across,""]];

    const Randomize = (e) => {
        e.preventDefault();
        setL1Think(L1ThinkSkills[Math.floor(Math.random() * Math.floor(12))]);
        setL2Think(L2ThinkSkills[Math.floor(Math.random() * Math.floor(11))]);
        setL3Think(L3ThinkSkills[Math.floor(Math.random() * Math.floor(14))]);
        setResource1(Resources[Math.floor(Math.random() * Math.floor(15))]);
        setResource2(Resources[Math.floor(Math.random() * Math.floor(15))]);
        setResource3(Resources[Math.floor(Math.random() * Math.floor(15))]);
        setProduct1(Products[Math.floor(Math.random() * Math.floor(38))]);
        setProduct2(Products[Math.floor(Math.random() * Math.floor(38))]);
        setProduct3(Products[Math.floor(Math.random() * Math.floor(38))]);

        if(imps === false){
            setIcon1(Icons1[Math.floor(Math.random() * Math.floor(8))]);
            setIcon2(Icons2[Math.floor(Math.random() * Math.floor(10))]);
            let L3Icons = (Level3Combo[Math.floor(Math.random() * Math.floor(108))]);
            setIcon3(L3Icons[0]);
            setIcon4(L3Icons[1]);
            setParameters(L3Icons[2]);
        }
        else{
            setIcon1(Icons12[Math.floor(Math.random() * Math.floor(10))]);
            setIcon2(Icons22[Math.floor(Math.random() * Math.floor(12))]);
            let L3Icons = (Level3Combo2[Math.floor(Math.random() * Math.floor(162))]);
            setIcon3(L3Icons[0]);
            setIcon4(L3Icons[1]);
            setParameters(L3Icons[2]);
        }
    };

    const changeEditMode = () => {
        setIsInEditMode(!isInEditMode);
    };

    const updateText = () => {
        setIsInEditMode(!isInEditMode);
        setText(textInput4.current.value);
    };

    const subjectHandler = (e) => {
        setSubject(e.target.value);
    };

    const HoverIn = () => {};
    const HoverOut = () => {};

    const textInput = useRef();
    const textInput2 = useRef();
    const textInput3 = useRef();
    const textInput4 = useRef();

    const printDocument = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const doc = new jsPDF();    // left margin // top margin // x-axis // y-axis //
                doc.addImage(imgData, 'JPEG', 0, 2, 240, 145);
                doc.text(15,165,"Notes:")
                doc.save("download.pdf");
            });
    };

    const addImperatives = () => {
        setImps(!imps);
    }

    const test = [' ELA ',' MATH ',' SS ',' SCI '];

    const Subject = ({ active, count, onClick }) => {
        return (
            <div onClick={onClick} className={active ? "subject active text-center" : "subject text-center"} onMouseEnter={(e)=>HoverIn(e.target.style.textShadow="0 0 1px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.textShadow="none")}>
                {count}
            </div>
        );
    };

    const toggle = () => setIsOpen(!isOpen);

    const handleClose1 = () => {setShow1(false); setL1Think(textInput.current.value);};
    const handleShow1 = () => {setShow1(true)};

    const handleClose2 = () => {setShow2(false); setIcon1(textInput.current.value)};
    const handleShow2 = () => {setShow2(true)};

    const handleClose3 = () => {setShow3(false); setResource1(textInput.current.value)};
    const handleShow3 = () => {setShow3(true)};

    const handleClose4 = () => {setShow4(false); setProduct1(textInput.current.value)};
    const handleShow4 = () => {setShow4(true)};

    const handleClose5 = () => {setShow5(false); setL2Think(textInput.current.value)};
    const handleShow5 = () => {setShow5(true)};

    const handleClose6 = () => {setShow6(false); setIcon2(textInput.current.value)};
    const handleShow6 = () => {setShow6(true)};

    const handleClose7 = () => {setShow7(false); setResource2(textInput.current.value)};
    const handleShow7 = () => {setShow7(true)};

    const handleClose8 = () => {setShow8(false); setProduct2(textInput.current.value)};
    const handleShow8 = () => {setShow8(true)};

    const handleClose9 = () => {setShow9(false); setL3Think(textInput.current.value)};
    const handleShow9 = () => {setShow9(true)};

    const handleClose10 = () => {setShow10(false); setResource3(textInput.current.value)};
    const handleShow10 = () => {setShow10(true)};

    const handleClose11 = () => {setShow11(false); setProduct3(textInput.current.value)};
    const handleShow11 = () => {setShow11(true)};

    const handleClose12 = () => {setShow12(false); setIcon3(textInput.current.value); setIcon4(textInput2.current.value); setParameters(textInput3.current.value)};
    const handleShow12 = () => {setShow12(true)};

    const handleShow13 = () => {setShow13(!show13)};
    const handleShow14 = () => {setShow14(!show14)};

    return(
        <div>
            <Navbar light expand="md" className='NavBar'>
                {/* <NavbarBrand href="/"><a class="navbar-brand" href="/"><img src={Logo} alt={Logo} className='logo' draggable="false"/></a></NavbarBrand> */}
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <li class="nav-link"> </li>
                        <NavItem>
                            <NavLink href="#" onClick={handleShow14}>Demo Video</NavLink>
                        </NavItem>
                        <li class="nav-link"> </li>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                State Standards
                            </DropdownToggle>
                            <DropdownMenu left style={{background:'lightgrey'}}>
                                <DropdownItem>
                                    <a href="http://www.corestandards.org/standards-in-your-state/" target = "_blank" style={{color:'black'}}>Common Core Site</a>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/* <NavItem>
                            <NavLink href="#" onClick={handleShow13}>Standards by State</NavLink>
                        </NavItem> */}
                        <li class="nav-link"> </li>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Icon Definitions
                            </DropdownToggle>
                            <DropdownMenu left style={{background:'lightgrey'}}>
                                <DropdownItem>
                                <a href = {Pdf} target = "_blank" style={{color:'black'}}>Depth & Complexity Icon Cheat Sheet</a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a href = {Pdf2} target = "_blank" style={{color:'black'}}>Content Imperative Icon Cheat Sheet</a>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <li class="nav-link"> </li>
                        <NavItem>
                            <NavLink href="#" onClick={printDocument}>Save as PDF</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div className='col-md-12 row' id='divToPrint'>
                <div className='col-md-2'>
                    <div className='col-md-12 mt-5'>
                        <div className=" text-center App">
                            {test.map(t => (<Subject key={t} count={t} active={t === chosen} onClick={() => setChosen(t)} />))}
                        </div>
                        <select className='form-control mt-1' style={{fontWeight:'bold'}}>
                                <option selected="true" disabled="disabled">Grade Level</option>
                                <option>Grade k</option>
                                <option>Grade 1</option>
                                <option>Grade 2</option>
                                <option>Grade 3</option>
                                <option>Grade 4</option>
                                <option>Grade 5</option>
                                <option>Grade 6</option>
                                <option>Grade 7</option>
                                <option>Grade 8</option>
                                <option>Grade 9</option>
                                <option>Grade 10</option>
                                <option>Grade 11</option>
                                <option>Grade 12</option>
                            </select>
                        <label className="CCRS mt-4">CCRS Standard:</label>

                    {isInEditMode ? 
                        <div>
                            <textarea cols="30" rows="10" className='form-control' defaultValue={text} ref={textInput4}/>
                            <button className='col-12 btn btn-primary btn-sm' onClick={updateText}>Done</button>
                        </div> :
                        <div className='textbox' onClick={changeEditMode}>
                            <p> {text} </p>
                        </div> }

                    </div>
                </div>
            <div className="col-md-8">
{/* ********************************************************** Headers *************************************************** */}
                <div className='col-sm-12 text-center' data-html2canvas-ignore="true">
                    <Fade left><h1 className='MainTitle'> Depth & Complexity </h1></Fade>
                    <Fade right><h4 className='SecTitle'>Alignment Project</h4></Fade>
                </div>
{/* ****************************************************** Randomizer Button *********************************************** */}
                <div className="input-group mt-3">
                    <input type="text" className='col-sm-5 offset-3 form-control topic' name="topic" placeholder= "Enter Topic" onChange={subjectHandler}/>
                    <div className="input-group-append">
                        <button className="btn btn-primary topic" onClick={Randomize}> Randomize </button>
                    </div>
                </div>
                <div className="col-sm-2 offset-9 mt-1">
                    <label className="switch">
                        <input type="checkbox" onClick={addImperatives}/><span className="slider round"></span>
                    </label>
                </div>
                <label className='col-sm-6 offset-9 contentlabel'>Use Content Imperatives</label>
            <FadeIn delay='300' transitionDuration='900'>
            <div className='L1'>
{/* ********************************************************** Stratigic **************************************************** */}
                    <h4 className='title'> Strategic </h4>
                    <div className='statement text-center'>
                        <p>I can <span onClick={handleShow1} className='l1t' onMouseEnter={(e)=>HoverIn(e.target.style.textShadow="0 0 3px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.textShadow="none")}> {l1Think} </span> the <span onClick={handleShow2} onMouseEnter={(e)=>HoverIn(e.target.style.boxShadow="0 0 4px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.boxShadow="none")}><img src={Icon1} alt={Icon1} className='Icon1' draggable="false"/></span> of <br/>{subject}.<br/>
                            I will get/organize information using <span onClick={handleShow3} className='l1r' onMouseEnter={(e)=>HoverIn(e.target.style.textShadow="0 0 3px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.textShadow="none")}> {resource1} </span> and share my findings in <span onClick={handleShow4} className='l1p' onMouseEnter={(e)=>HoverIn(e.target.style.textShadow="0 0 3px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.textShadow="none")}> {product1}</span>.</p>
                    </div>
                </div>
                <div className='mt-4 L2'>
{/* ********************************************************** Proficient *************************************************** */}
                        <h4 className='title'> Proficient </h4>
                    <div className='statement text-center'>
                        <p>I can <span onClick={handleShow5} className='l2t' onMouseEnter={(e)=>HoverIn(e.target.style.textShadow="0 0 3px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.textShadow="none")}> {l2Think} </span> the <span onClick={handleShow6} onMouseEnter={(e)=>HoverIn(e.target.style.boxShadow="0 0 4px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.boxShadow="none")}><img src={Icon2} alt={Icon2} className='Icon2' draggable="false"/></span> of <br/>{subject}.<br/> 
                        I will get/organize information using <span onClick={handleShow7} className='l2r' onMouseEnter={(e)=>HoverIn(e.target.style.textShadow="0 0 3px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.textShadow="none")}> {resource2} </span> and share my findings in <span onClick={handleShow8} className='l2p' onMouseEnter={(e)=>HoverIn(e.target.style.textShadow="0 0 3px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.textShadow="none")}> {product2}</span>.</p>
                    </div>
                </div>
                <div className='mt-4 L3'>
{/* ********************************************************** Advanced **************************************************** */}
                        <h4 className='title'> Advanced </h4>
                    <div className='statement'>
                        <p className='text-center'>I can <span onClick={handleShow9} className='l3t' onMouseEnter={(e)=>HoverIn(e.target.style.textShadow="0 0 3px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.textShadow="none")}> {l3Think} </span> the <span onClick={handleShow12} onMouseEnter={(e)=>HoverIn(e.target.style.boxShadow="0 0 4px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.boxShadow="none")}><img src={Icon3} alt={Icon3} className='Icon3' draggable="false"/></span> {parameters} <span onClick={handleShow12} onMouseEnter={(e)=>HoverIn(e.target.style.boxShadow="0 0 4px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.boxShadow="none")}>{Icon4 === "" ? <></> : <img src={Icon4} alt={Icon4} className='Icon3' draggable="false"/>}</span> of <br/>{subject}.<br/>
                        I will get/organize information using <span onClick={handleShow10} className='l3r' onMouseEnter={(e)=>HoverIn(e.target.style.textShadow="0 0 3px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.textShadow="none")}> {resource3} </span> and share my findings in <span onClick={handleShow11} className='l3p' onMouseEnter={(e)=>HoverIn(e.target.style.textShadow="0 0 3px grey")} onMouseLeave={(e)=>HoverOut(e.target.style.textShadow="none")}> {product3}</span>.</p>
                    </div>
                </div>
                </FadeIn>
            </div>
            </div>
{/* ********************************************************** Footer **************************************************** */}
            <footer className='footer'>
                <p>© 2020 J Taylor Education - <a href="https://www.jtayloreducation.com/" target="_blank">jtayloreducation.com</a></p>
            </footer>
{/* ********************************************************  ALL Modals **************************************************** */}
{/* Modal #1 for Level 1 Thinking Skills */}
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Thinking Skill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={l1Think} ref={textInput}>
                    <optgroup label="Thinking Skills">
                            <option value="list">list</option>
                            <option value="define">define</option>
                            <option value="state">state</option>
                            <option value="summarize">summarize</option>
                            <option value="describe">describe</option>
                            <option value="discuss">discuss</option>
                            <option value="explain">explain</option>
                            <option value="identify">identify</option>
                            <option value="paraphrase">paraphrase</option>
                            <option value="sequence">sequence</option>
                            <option value="recognize">recognize</option>
                            <option value="compare & contrast">compare & contrast</option>
                            <option value="categorize">categorize</option>
                            <option value="support">support</option>
                            <option value="examine">examine</option>
                            <option value="interpret">interpret</option>
                        </optgroup>
                        <optgroup label="Critial Thinking Skills">
                            <option value="gather evidence to support of">gather evidence to support</option>
                            <option value="question">question</option>
                            <option value="prove">prove</option>
                            <option value="defend">defend</option>
                            <option value="differentiate">differentiate</option>
                            <option value="judge">judge</option>
                            <option value="determine the relevance of">determine the relevance</option>
                            <option value="note abmiguity">note ambiguity</option>
                            <option value="state & test assumptions of">state & test assumptions</option>
                            <option value="evaluate">evaluate</option>
                        </optgroup>
                        <optgroup label="Creative Thinking Skills">
                            <option value="redesign">redesign</option>
                            <option value="add to">add to</option>
                        </optgroup>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose1}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose1}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #2 for Level 1 Icon */}
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={Icon1} ref={textInput}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value={Rules}>Rules</option>
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Origin}>Origin</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose2}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose2}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #3 for level 1 resource */}
            <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Resource</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={resource1} ref={textInput}>
                        {Resources.map((item, i) => <option value={item} key={i}> {item} </option>)}
                    </select></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose3}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose3}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #4 for level 1 product */}
            <Modal show={show4} onHide={handleClose4}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={product1} ref={textInput}>
                        {Products.map((item, i) => <option value={item} key={i}> {item} </option>)}
                    </select></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose4}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose4}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #5 for Level 2 Thinking Skills */}
            <Modal show={show5} onHide={handleClose5}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Thinking Skill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={l2Think} ref={textInput}>
                        <optgroup label="Thinking Skills">
                            <option value="list">list</option>
                            <option value="define">define</option>
                            <option value="state">state</option>
                            <option value="summarize">summarize</option>
                            <option value="describe">describe</option>
                            <option value="discuss">discuss</option>
                            <option value="explain">explain</option>
                            <option value="identify">identify</option>
                            <option value="paraphrase">paraphrase</option>
                            <option value="sequence">sequence</option>
                            <option value="recognize">recognize</option>
                            <option value="compare & contrast">compare & contrast</option>
                            <option value="categorize">categorize</option>
                            <option value="support">support</option>
                            <option value="examine">examine</option>
                            <option value="interpret">interpret</option>
                        </optgroup>
                        <optgroup label="Critial Thinking Skills">
                            <option value="gather evidence to support of">gather evidence to support</option>
                            <option value="question">question</option>
                            <option value="prove">prove</option>
                            <option value="defend">defend</option>
                            <option value="differentiate">differentiate</option>
                            <option value="judge">judge</option>
                            <option value="determine the relevance of">determine the relevance</option>
                            <option value="note abmiguity">note ambiguity</option>
                            <option value="state & test assumptions of">state & test assumptions</option>
                            <option value="evaluate">evaluate</option>
                        </optgroup>
                        <optgroup label="Creative Thinking Skills">
                            <option value="redesign">redesign</option>
                            <option value="add to">add to</option>
                        </optgroup>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose5}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose5}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #6 for Level 2 Icon */}
            <Modal show={show6} onHide={handleClose6}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={Icon2} ref={textInput}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value={Rules}>Rules</option>
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Origin}>Origin</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose6}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose6}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #7 for level 2 resource */}
            <Modal show={show7} onHide={handleClose7}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Resource</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={resource2} ref={textInput}>
                        {Resources.map((item, i) => <option value={item} key={i}> {item} </option>)}
                    </select></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose7}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose7}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #8 for level 2 product */}
            <Modal show={show8} onHide={handleClose8}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={product2} ref={textInput}>
                        {Products.map((item, i) => <option value={item} key={i}> {item} </option>)}
                    </select></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose8}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose8}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #9 for Level 3 Thinking Skills */}
            <Modal show={show9} onHide={handleClose9}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Thinking Skill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={l3Think} ref={textInput}>
                        <optgroup label="Thinking Skills">
                            <option value="list">list</option>
                            <option value="define">define</option>
                            <option value="state">state</option>
                            <option value="summarize">summarize</option>
                            <option value="describe">describe</option>
                            <option value="discuss">discuss</option>
                            <option value="explain">explain</option>
                            <option value="identify">identify</option>
                            <option value="paraphrase">paraphrase</option>
                            <option value="sequence">sequence</option>
                            <option value="recognize">recognize</option>
                            <option value="compare & contrast">compare & contrast</option>
                            <option value="categorize">categorize</option>
                            <option value="support">support</option>
                            <option value="examine">examine</option>
                            <option value="interpret">interpret</option>
                        </optgroup>
                        <optgroup label="Critial Thinking Skills">
                            <option value="gather evidence to support of">gather evidence to support</option>
                            <option value="question">question</option>
                            <option value="prove">prove</option>
                            <option value="defend">defend</option>
                            <option value="differentiate">differentiate</option>
                            <option value="judge">judge</option>
                            <option value="determine the relevance of">determine the relevance</option>
                            <option value="note abmiguity">note ambiguity</option>
                            <option value="state & test assumptions of">state & test assumptions</option>
                            <option value="evaluate">evaluate</option>
                        </optgroup>
                        <optgroup label="Creative Thinking Skills">
                            <option value="redesign">redesign</option>
                            <option value="add to">add to</option>
                        </optgroup>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose9}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose9}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #10 for level 3 resource */}
            <Modal show={show10} onHide={handleClose10}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Resource</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={resource3} ref={textInput}>
                        {Resources.map((item, i) => <option value={item} key={i}> {item} </option>)}
                    </select></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose10}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose10}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #11 for level 3 product */}
            <Modal show={show11} onHide={handleClose11}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={product3} ref={textInput}>
                        {Products.map((item, i) => <option value={item} key={i}> {item} </option>)}
                    </select></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose11}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose11}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #12 for Level 3 Icons */}
            <Modal show={show12} onHide={handleClose12}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Modify Icon(s)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select className='form-control' defaultValue={Icon3} ref={textInput}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value={Rules}>Rules</option>
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Origin}>Origin</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select>
                </Modal.Body>
                <Modal.Body>
                    <select className='form-control' defaultValue={parameters} ref={textInput3}>
                        <option value="">None</option>
                        <option value="of">of</option>
                        <option value="from">from</option>
                        <option value="about">about</option>
                        <option value="within">within</option>
                        <option value="in the">in the</option>
                        <option value="of the">of the</option>
                        <option value="about the">about the</option>
                        <option value="within the">within the</option>
                    </select>
                </Modal.Body>
                <Modal.Body>
                    <select className='form-control' defaultValue={Icon4} ref={textInput2}>
                        <optgroup label="Depth & Complexity Icons">
                            <option value=''>None</option>
                            <option value={Rules}>Rules</option>
                            <option value={Language}>Language of Discipline</option>
                            <option value={Details}>Details</option>
                            <option value={Patterns}>Patterns</option>
                            <option value={Ethics}>Ethics</option>
                            <option value={BigIdea}>Big Idea</option>
                            <option value={Multiple}>Multiple Perspectives</option>
                            <option value={OverTime}>Over Time</option>
                            <option value={Trends}>Trends</option>
                            <option value={Unanswered}>Unanswered Questions</option>
                            <option value={Across}>Across Disciplines</option>
                        </optgroup>
                        <optgroup label="Content Imperatives">
                            <option value={Parallel}>Parallel</option>
                            <option value={Paradox}>Paradox</option>
                            <option value={Origin}>Origin</option>
                            <option value={Convergence}>Convergence</option>
                            <option value={Contribution}>Contribution</option>
                        </optgroup>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose12}>
                        Save
                    </Button>
                    <Button variant="danger" onClick={handleClose12}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #13 for school standards */}
            <Modal show={show13} onHide={handleShow13}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Get your State Standards</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href="http://www.corestandards.org/standards-in-your-state/" target = "_blank">Common Core Site</a>
                    {/* <select className='form-control' ref={textInput}>
                        <option value="" selected="true" disabled="disabled">Choose your State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select> */}
                </Modal.Body>
                {/* <Modal.Body> */}
                {/* <select name="grade" className='form-control'>
                    <option value="" selected="true" disabled="disabled">Grade Level</option>
                    <option value="k">K</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                </Modal.Body>
                <Modal.Body>
                    <select name="subject" className='form-control'>
                        <option value="" selected="true" disabled="disabled">Subject</option>
                        <option value="ELA">English Language Arts</option>
                        <option value="MATH">Mathematics</option>
                        <option value="SS">Social Studies</option>
                        <option value="SCI">Science</option>
                    </select>
                </Modal.Body> */}
                <Modal.Footer>
                    {/* <Button variant="primary" onClick={handleShow13}>
                        Search
                    </Button> */}
                    <Button variant="danger" onClick={handleShow13}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
{/* Modal #14 for Demo Video */}
            <Modal show={show14} onHide={handleShow14}>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitles'>Demo Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    [  VIDEO HERE  ]
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="primary" onClick={handleShow14}>
                        Save
                    </Button> */}
                    <Button variant="danger" onClick={handleShow14}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
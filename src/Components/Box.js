import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import './box.css';
import line from '../img/line.png';
import BackImg from './BackImg';
import Edit from './Edit';
import Select from './Select';

function Box() {
    const [isActive, setIsActive] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [change, setChange] = useState('');
    const [againChange, setAgainChange] = useState('')
    const [dataa, setDataa] = useState('');
    const [calculate, setCalculate] = useState();
    const [valuee, setValuee] = useState([]);
    const [aaa, setAaa] = useState(false);
    const [color, setColor] = useState(false);
    const [bbb, setBbb] = useState(false);
    const [subbtn, setSubBtn] = useState(false);


    const handleClick = () => {
        //  toggle
        setIsActive(current => !current);

        //  or set to true
        // setIsActive(true);
    };
    const handleEditClick = () => {
        //  toggle
        setIsEdit(current => !current);

        //  or set to true
        //setIsEdit(true);
    };

    const demo = () => {
        setAaa(true)
        // console.log("first")
    }

    const demos = () => {
        setSubBtn(true)

        // console.log("first")
    }

    const resetgrid = () => {
        setBbb(true)
        // console.log("firstss")
    }

    const editbtn = () => {
        // setColor(true)

        $('.skin-colors li').on('click', function () {
            $('.skin-colors li').removeClass('active');
            $(this).addClass('active');

            var bgColor = $(this).data('skin');
            $('body').css('background-color', "#section-block5");
            $(document).ready(function () {
                $('.parentss').click(function () {
                    $("#section-block5").css("background-color", bgColor);
                    // $("#section-block5" ,handleEditClick()).css({backgroundColor: isActive ? 'red' : '',
                    // color: isActive ? 'white' : '',},"background-color", bgColor,

                    //     <div 
                    //     style={{
                    //       backgroundColor: isActive ? 'red' : '',
                    //       color: isActive ? 'white' : '',
                    //     }} onClick={handleEditClick} >
                    //     this is edit
                    //   </div>
                });

            });
            // $('body').css('background-color', bgColor);
        });
        //  console.log("edit button is click ")
    }

    const floodfill = () => {
        $('.skin-colors li').on('click', function () {
            $('.skin-colors li').removeClass('active');
            $(this).addClass('active');

            var bgColor = $(this).data('skin');
            $('body').css('background-color', "#section-block5");
            $(document).ready(function () {
                $('.parentss').click(function () {

                    $("    #section-block5").css("background-color", bgColor);

                });
            });

        });
        //console.log("flood fill functionality is working ")
    }

    const selectbtn = () => {

        $('.skin-colors li').on('click', function () {
            $('.skin-colors li').removeClass('active');
            $(this).addClass('active');

            var bgColor = $(this).data('skin');
            $('body').css('background-color', "#section-block5");
            $(document).ready(function () {
                $('.parents').click(function () {
                    // $("#section-block5", handleClick()).css("background-color", bgColor);

                    $("#section-block5", handleClick()).css({
                        backgroundImage: isActive ? `url(${line})` : '',
                        color: isActive ? 'pink' : ''
                    }, "background-color", bgColor);



                });

            });

        });

        selectImg()
        //  $('body').css('background-color', bgColor);

        //console.log("select button")
    }

    const selectImg = () => {
        // <div 
        //     style={{
        //         backgroundImage: isActive ? `url(${line})` : '',
        //         color: isActive ? '#11ffee00' : '',

        //     }} >hello
        // </div>
        $(function () {
            $(".parents").click(function () {
                $("#section-block5").css({
                    backgroundImage: isActive ? `url(${line})` : '',
                    color: isActive ? '#11ffee00' : ''
                });


            });
        })

        // console.log("this is background image")
    }

    const resize = (e) => {
        e.preventDefault()

        let calculate = change * againChange;
        setDataa(calculate)
        // console.log("@@@@@@@@@@@", calculate)

    }
    let temp = [];

    for (let i = 0; i < dataa; i++) {
        // console.log("$$$$$$$$$", i)
        temp.push(i)
    }

    function copyFromInput1() {
        return (<div>
            <div class="parent11 ">
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-5'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-5'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-1'></div>
                <div className='section-5'></div>
                <div className='section-5'></div>
                <div className='section-1'></div>
                <div className='section-8'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-1'></div>
                <div className='section-5'></div>
                <div className='section-5'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-8'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>

                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>


                <div className='section-1'></div>
                <div className='section-4'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-4'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-4'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-4'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-4'></div>
                <div className='section-4'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-4'></div>
                <div className='section-4'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
            </div>
        </div>
        )
    }

    function resetGrid() {
        return (<div>
            <div class="parent12 " >
                <div class="">
                    <div id='section-block5'></div>
                    <div id='section-block5'></div>
                    <div id='section-block5'></div>

                    <div id='section-block2' style={{ height: '96px' }}></div>
                    <div id='section-block2' style={{ marginTop: '-195px', height: '94px' }}></div>
                    <div id='section-block2' style={{ marginTop: '-101px', }}></div>

                    <div id='section-block3'></div>
                    <div id='section-block3' style={{ marginTop: '-195px', }}></div>
                    <div id='section-block3' style={{ marginTop: '-101px', height: '100px' }}></div>
                </div>


            </div>
        </div>
        )
    }

    function submit() {
        return (<div>

            <div class="parent11 " >
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-5'></div>
                <div className='section-5'></div>
                <div className='section-5'></div>
                <div className='section-5'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-1'></div>
                <div className='section-5'></div>
                <div className='section-5'></div>
                <div className='section-1'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>

                <div className='section-1'></div>
                <div className='section-5'></div>
                <div className='section-5'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>
                <div className='section-1'></div>

                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-8'></div>
                <div className='section-8'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>


                <div className='section-1'></div>
                <div className='section-4'></div>
                <div className='section-4'></div>
                <div className='section-4'></div>
                <div className='section-4'></div>
                <div className='section-4'></div>
                <div className='section-4'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-4'></div>
                <div className='section-4'></div>
                <div className='section-4'></div>
                <div className='section-4'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-4'></div>
                <div className='section-4'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>

                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-4'></div>
                <div className='section-4'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
                <div className='section-1'></div>
            </div>
            <div id="correct">Correct Solution</div>
        </div>
        )
    }


    useEffect(() => {
        fetchData();
        output();

    }, []);
    function fetchData() {

        axios.get('https://api.github.com/repos/fchollet/ARC/contents/data/training?ref=master')
            //  .then((response) => { setData(response.data) })
            .then((response) => { console.log(response.data) });

    }
    function output() {

        axios.get('https://raw.githubusercontent.com/fchollet/ARC/master/data/training/22168020.json')
            //.then((response) => { setList(response.data) })
            .then((response) => { console.log(response.data) });

    }

    //hide button functionality..
    $(document).ready(function () {
        $(".copy-btn").click(function () {
            $(".parentss").hide();
        });
        $(".reset-btn").click(function () {
            $(".parent11").hide();
        });
        $(".resize-btn").click(function () {
            $(".parent12").hide();
        });
    });

    return (
        <>
            {/* <BackImg />
            <Edit />

            <Select /> */}
            <div class="header">
                <p>Task demonstration</p>
                <button class="task-btn" type="button">Next test input</button>
                <i class="fa fa-question-circle icons"></i>
            </div>

            <div class="grid-container">
                <div class="column" style={{ backgroundColor: '#ffffff' }}>
                    <div>
                        <p>Input 1</p>
                        <div class="parent ">
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                        </div>
                    </div>
                </div>
                <div class="column" style={{ backgroundColor: '#ffffff' }}>
                    <p>Output 1</p>
                    <div class="parent ">
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>


                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>


                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-4'></div>
                        <div className='section-4'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                    </div>
                </div>

                <div class="column" style={{ backgroundColor: '#ffffff' }}>
                    <div>

                        <p>Input 2</p>
                        <div class="parent ">
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-2'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-2'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-2'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-2'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-2'></div>
                            <div className='section-2'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-2'></div>
                            <div className='section-2'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-5'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-5'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-5'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-5'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-5'></div>
                            <div className='section-5'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-5'></div>
                            <div className='section-5'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                        </div>
                    </div>
                </div>
                <div class="column" style={{ backgroundColor: '#ffffff' }}>
                    <p>Output 2</p>
                    <div class="parent ">
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-2'></div>
                        <div className='section-2'></div>
                        <div className='section-2'></div>
                        <div className='section-2'></div>
                        <div className='section-2'></div>
                        <div className='section-2'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-2'></div>
                        <div className='section-2'></div>
                        <div className='section-2'></div>
                        <div className='section-2'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>



                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-2'></div>
                        <div className='section-2'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>


                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-2'></div>
                        <div className='section-2'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-5'></div>
                        <div className='section-5'></div>
                        <div className='section-5'></div>
                        <div className='section-5'></div>
                        <div className='section-5'></div>
                        <div className='section-5'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-5'></div>
                        <div className='section-5'></div>
                        <div className='section-5'></div>
                        <div className='section-5'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-5'></div>
                        <div className='section-5'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-5'></div>
                        <div className='section-5'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                    </div>
                </div>
            </div>

            <div class="grid-container">
                <div class="column" style={{ backgroundColor: '#ffffff' }}>
                    <div>
                        <p>Input 3</p>
                        <div class="parent ">
                            <div className='section-7'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-7'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-7'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-7'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-7'></div>
                            <div className='section-7'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-7'></div>
                            <div className='section-7'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>


                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-9'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-9'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-9'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-9'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-9'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-9'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-9'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-9'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-9'></div>
                            <div className='section-9'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                        </div>
                    </div>
                </div>
                <div class="column" style={{ backgroundColor: '#ffffff' }}>
                    <p>Output 3</p>
                    <div class="parent ">
                        <div className='section-7'></div>
                        <div className='section-7'></div>
                        <div className='section-7'></div>
                        <div className='section-7'></div>
                        <div className='section-7'></div>
                        <div className='section-7'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-7'></div>
                        <div className='section-7'></div>
                        <div className='section-7'></div>
                        <div className='section-7'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-7'></div>
                        <div className='section-7'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-7'></div>
                        <div className='section-7'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-9'></div>
                        <div className='section-9'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>
                        <div className='section-1'></div>

                    </div>
                </div>

            </div>

            <div class="header">
                <p>Test </p>
                <div class="btn-text">1/1
                    <button class="tasks-btn" type="button">Next test input</button>
                    <i class="fa fa-question-circle icon"></i>
                </div>
            </div>

            <div class="grid-container">
                <div class="column" style={{ backgroundColor: '#ffffff' }}>
                    <div>

                        <p style={{ marginLeft: '36rem', marginRight: '1rem' }}> </p>
                        <p>Test</p>
                        <div class="parent ">
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-5'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-5'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-5'></div>
                            <div className='section-5'></div>
                            <div className='section-1'></div>
                            <div className='section-8'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-5'></div>
                            <div className='section-5'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-8'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-8'></div>
                            <div className='section-8'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-8'></div>
                            <div className='section-8'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-8'></div>
                            <div className='section-8'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>


                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>

                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-4'></div>
                            <div className='section-4'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                            <div className='section-1'></div>
                        </div>
                    </div>
                </div>

                <div class="column" style={{ backgroundColor: '#ffff', }}>
                    <p> Output </p>

                    {/* {console.log("$$$$$$$@@@$", temp)} */}

                    <div class="parentss ">
                        {/* {console.log("@@@@@@@@@@")} */}
                        {temp && temp.map((item) => {
                            console.log("$$$$$$$", item)
                            return (

                                <div class="rows ">

                                    <div id='section-block5'></div>




                                </div>
                            )
                        })}
                    </div>



                </div>
            </div>

            <div class="grid-containers">
                <div class="columns" style={{ backgroundColor: '#ffffff' }}>
                    <div class="content">
                        <p>Change grid size :</p>
                        <form onSubmit={resize}>
                            {/* <input type="text" name="input" size="16" id="answer" onkeyup=" this.value = eval(this.value)"/>*/}
                            {/* <input type="text" class="textbox" size="30" id='myBtn' value={calculate}
                                onChange={(e) => setCalculate(e.target.value)} placeholder="Type a math problem and press enter" /> */}
                            {/* Change grid size : */}
                            <input type="text" class="textbox" value={change} onChange={(e) => setChange(e.target.value)} />
                            <input type="text" class="textbox" value={againChange} onChange={(e) => setAgainChange(e.target.value)} />

                            <button class="resize-btn" id='myBtn'>Resize</button>

                        </form>
                    </div>


                    <div class="row">
                        <div class="colum" onClick={editbtn}>

                            <input type="radio" name="edit" id="edit" />
                            <label for="html">Edit</label>

                        </div>
                        <div class="colum" onClick={selectbtn}>
                            <input type="radio" name="edit" id="select" />
                            <label for="html">Select</label>

                        </div>
                        <div class="colum" onClick={floodfill}>
                            <input type="radio" name="edit" value="floodFill" id="mode2" />
                            <label for="mode2">Flood fill</label>

                        </div>
                    </div>

                    <div class="parents" >

                        <ul class="skin-colors">
                            <li data-skin="#1A1413" style={{ backgroundColor: '#1A1413' }} class="active"></li>
                            <li data-skin="#0672F3 " style={{ backgroundColor: '#0672F3' }} ></li>
                            <li data-skin="#D64343" style={{ backgroundColor: '#D64343' }} ></li>
                            <li data-skin="#8bc34a" style={{ backgroundColor: '#8bc34a' }} ></li>
                            <li data-skin="#ffc107" style={{ backgroundColor: '#ffc107' }} ></li>
                            <li data-skin="#A6ACAF" style={{ backgroundColor: '#A6ACAF' }} ></li>
                            <li data-skin="#ea4c89" style={{ backgroundColor: '#ea4c89' }} ></li>
                            <li data-skin="#f39c12" style={{ backgroundColor: '#f39c12' }} ></li>
                            <li data-skin="#00bcd4" style={{ backgroundColor: '#00bcd4' }} ></li>
                            <li data-skin="#90240C" style={{ backgroundColor: '#90240C' }} ></li>
                        </ul>
                    </div>


                </div>

                <div class="columns" style={{ backgroundColor: '#ffffff' }}>
                    <button class="copy-btn" onClick={demo}>copy from input </button>
                    {aaa === false ? console.log("first") :
                        copyFromInput1()
                    }

                </div>
                <div class="columns" style={{ backgroundColor: '#ffffff' }}>

                    <button class="reset-btn" type="button" onClick={resetgrid}>Reset grid</button>
                    {bbb === false ? console.log("second") :
                        resetGrid()
                    }
                    <button class="submit-btn" type="button" onClick={demos}>Submit</button>
                    {subbtn === false ? console.log("first") :
                        submit()
                    }
                </div>


            </div>
            {/* <div id="wrong">Wrong Solution</div> */}
            {/* <div id="correct">Correct Solution</div> */}

            {
                data.slice(0, 3).map(item => {
                    return (
                        <div>
                            {/* <p>{item.name}</p> */}
                        </div>
                    )
                })
            }
            {
                list.map(items => {
                    return (
                        <div>
                            {/* <p>{items.test[0]}</p> */}
                            {/* <p>{items.train}</p> */}
                        </div>
                    )
                })
            }

        </>
    )
}
export default Box;


"use strict";

const featureDropDown = document.querySelector('.features-drop-down')
const compDropDown = document.querySelector('.company-drop-down')
const iconUp = document.querySelectorAll('.icon-up')
const features = document.querySelector('.features')
const company = document.querySelector('.company')
const iconDown = document.querySelectorAll('.icon-down')
const featuresMenu = document.querySelector('.features-menu')
const companyMenu = document.querySelector('.company-menu-items')
const body = document.querySelector('body')

const dropDown = function(){
    featuresMenu.classList.toggle('hidden')
    features.classList.toggle('color')
    // iconDown.classList.toggle('hidden')
    // iconUp.classList.toggle('hidden')
}

const dropDownTwo = function(){
    companyMenu.classList.toggle('hidden')
    company.classList.toggle('color')
    // iconDown.classList.toggle('hidden')
    // iconUp.classList.toggle('hidden')
}

const bodyClick = function(){
    featuresMenu.classList.add('hidden')
    companyMenu.classList.add('hidden')

}

if (featuresMenu){
    console.log('present')
}

featureDropDown.addEventListener('click', dropDown)
compDropDown.addEventListener('click', dropDownTwo)
// body.addEventListener('click', bodyClick)
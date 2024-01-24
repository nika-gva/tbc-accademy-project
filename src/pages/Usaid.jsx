import React from 'react'
import Banner from '../components/banner/Banner'
import Courses from '../components/courses/Courses'
import Partners from '../components/partners/Partners'
import Questions from '../components/questions/Questions'
import data from "../../questions.json"

export const Usaid = () => {
  return (
    <>
      <Banner/>
      <Courses />
      <Partners />
      <Questions data={data} count={3}/>
    </>
  )
}

import React from 'react'
import Categories from '../components/category/Categories'
import Companies from '../components/Companies'
import Divider from '@mui/material/Divider'
import SearchCourse from '../components/search/SearchCourse'
import Learning from '../components/Learning'
import FeaturedContent from '../components/FeaturedContent'
import Info from '../components/info/Info'
import Testimonials from "../components/testimonial/Testimonials";
import PopularContent from "../components/PopularContents/PopularContent";
import DreamBusiness from "../components/DreamBusiness";

const HomePage = () => {
  return (
    <div>
      <SearchCourse />
      <Companies />
      <Categories />
      <PopularContent />
      <Learning />
      <FeaturedContent />
      <DreamBusiness />
      <Testimonials />
      {/*<Divider />*/}
      <Info />
    </div>
  )
}

export default HomePage
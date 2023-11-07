import React, {useState} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import WorriedBoxContainer from "../components/MyPage/WorriedBoxContainer"
import CategoryBtn from "../components/MyPage/CategoryBtn"
import Footer from '../components/Footer';

function MyPage(){

    const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

    return (
        <div>
            <Header />
            <Nav />
            <CategoryBtn onButtonClick={handleCategoryChange} />
            <WorriedBoxContainer id="test1" category={selectedCategory} />
            <Footer/>
        </div>
    );
}

export default MyPage;
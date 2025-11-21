import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";


import Blog1 from '../assets/Images/Blog-1.jpg';
import Blog2 from '../assets/Images/Blog-2.jpg';
import Blog3 from '../assets/Images/Blog-3.jpg';
import Blog4 from '../assets/Images/Blog-4.jpg';
import Blog5 from '../assets/Images/Blog-5.jpg';
import Blog6 from '../assets/Images/Blog-6.jpg';

function BlogSection() {
  const blogs = [
    {
      date: "October 11, 2025",
      title: "Virtual Office with Mail Handling Services: Why It Matters for Your Business?",
      author: "Satender Saini",
      desc: "Picture this: you’ve just launched your dream startup. Your team works across cities, and maybe even countries...",
      image: Blog1,
      link: "#"
    },
    {
      date: "October 10, 2025",
      title: "Trade License Fees in India: City-Wise Cost Breakdown",
      author: "Jyoti Saini",
      desc: "A trade license is a legal permit issued by municipal authorities that allows a business to operate within a specific area...",
      image: Blog2,
      link: "#"
    },
    {
      date: "October 9, 2025",
      title: "How Virtual Office Spaces in Bangalore Can Help You Save Costs?",
      author: "Satender Saini",
      desc: "Bangalore, often hailed as India’s Silicon Valley, is a magnet for innovation, startups, and entrepreneurial dreams...",
      image: Blog3,
      link: "#"
    },
     {
      date: "October 10, 2025",
      title: "Trade License Fees in India: City-Wise Cost Breakdown",
      author: "Jyoti Saini",
      desc: "A trade license is a legal permit issued by municipal authorities that allows a business to operate within a specific area...",
      image: Blog4,
      link: "#"
    },
    {
      date: "October 9, 2025",
      title: "How Virtual Office Spaces in Bangalore Can Help You Save Costs?",
      author: "Satender Saini",
      desc: "Bangalore, often hailed as India’s Silicon Valley, is a magnet for innovation, startups, and entrepreneurial dreams...",
      image: Blog5,
      link: "#"
    },
    {
      date: "October 9, 2025",
      title: "How Virtual Office Spaces in Bangalore Can Help You Save Costs?",
      author: "Satender Saini",
      desc: "Bangalore, often hailed as India’s Silicon Valley, is a magnet for innovation, startups, and entrepreneurial dreams...",
      image: Blog6,
      link: "#"
    }
  ];

  return (
    <section className="container my-5 blog-section">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="blog-heading">Latest Blogs</h3>
        <a href="#" className="view-all">View All</a>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-img" />
              <div className="blog-content">
                <span className="blog-date">{blog.date}</span>
                <h4 className="blog-title">{blog.title}</h4>
                <p className="blog-author">{blog.author}</p>
                <p className="blog-desc">{blog.desc}</p>
                <a href={blog.link} className="blog-readmore">Read More →</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default BlogSection;

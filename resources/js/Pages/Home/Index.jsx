export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <div className="text-center">
        https://old.tlc.com.au/affordable-cosmetic-surgery-loan
        https://old.tlc.com.au/best-coronary-care-surgery
        https://old.tlc.com.au/best-plastic-surgery-loans
        https://old.tlc.com.au/breast-augmentation-loans
        https://old.tlc.com.au/dental-loan
        https://old.tlc.com.au/dental-surgery-loan-for-you
        https://old.tlc.com.au/ivf-programs-loan-get-the-financial-relief
        https://old.tlc.com.au/ophthalmology-surgery-loan-protect-your-vision-at-the-right-time
        https://old.tlc.com.au/orthopaedic-surgery-loan-providers-tlc
        https://old.tlc.com.au/take-ivf-programs-loan
        https://old.tlc.com.au/take-ophthalmology-surgery-loan
        https://old.tlc.com.au/take-orthopaedic-surgery-loan
        https://old.tlc.com.au/weight-loss-surgery-loan
      </div>
    </>
  );
}

import Image from 'next/image'
import postImage from './cosmetic-surgery-loans-4.jpg'
import BlogPost from '@/components/BlogPost'
import {users} from '@/utils/constant'

export const article = {
  title: '',
  description: '',
  publishedOn: '2020-10-06T13:28:20-0400',
  image: postImage,
  category: '',
  author: users.tim,
}

export const metadata = {
  title: article.title,
  description: article.description,
}

export default function Post(props) {
  return <BlogPost post={article} {...props} />
}

<Image src={postImage} alt={article.title} />


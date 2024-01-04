import Thumbnail1 from './images/blog10.jpg'
import Thumbnail2 from './images/blog11.jpg'
import Thumbnail3 from './images/blog12.jpg'
import Thumbnail4 from './images/blog13.jpg'


import Avatar1 from './images/blog1.jpg'
import Avatar2 from './images/blog9.jpg'
import Avatar3 from './images/blog8.jpg'
import Avatar4 from './images/blog7.jpg'
import Avatar5 from './images/blog2.jpg'


export const DUMMY_POSTS =[
    {
      id: '1',
      thumbnail: Thumbnail1,
      category: 'education',
      title: 'This is the title of the first post on this website blog',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquam nulla. Similique hic quae placeat earum asperiores ipsum suscipit qui fugit soluta, adipisci, aliquam fuga sapiente provident ab quisquam tempore praesentium nihil rerum ea impedit veniam. Repudiandae dolores placeat deserunt recusandae, aspernatur, delectus ullam, odit explicabo tenetur sapiente sit quam.',
      authorID: 3
  
    },
    {
      id: '2',
      thumbnail: Thumbnail2,
      category: 'Technology',
      title: 'This is the title of the first post on this website blog',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquam nulla. Similique hic quae placeat earum asperiores ipsum suscipit qui fugit soluta, adipisci, aliquam fuga sapiente provident ab quisquam tempore praesentium nihil rerum ea impedit veniam. Repudiandae dolores placeat deserunt recusandae, aspernatur, delectus ullam, odit explicabo tenetur sapiente sit quam.',
      authorID: 8
  
    },
    {
      id: '3',
      thumbnail: Thumbnail3,
      category: 'Tourism',
      title: 'This is the title of the first post on this website blog',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquam nulla. Similique hic quae placeat earum asperiores ipsum suscipit qui fugit soluta, adipisci, aliquam fuga sapiente provident ab quisquam tempore praesentium nihil rerum ea impedit veniam. Repudiandae dolores placeat deserunt recusandae, aspernatur, delectus ullam, odit explicabo tenetur sapiente sit quam.',
      authorID: 5
  
    },
    {
      id: '4',
      thumbnail: Thumbnail4,
      category: 'Agriculture',
      title: 'This is the title of the first post on this website blog',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquam nulla. Similique hic quae placeat earum asperiores ipsum suscipit qui fugit soluta, adipisci, aliquam fuga sapiente provident ab quisquam tempore praesentium nihil rerum ea impedit veniam. Repudiandae dolores placeat deserunt recusandae, aspernatur, delectus ullam, odit explicabo tenetur sapiente sit quam.',
      authorID: 4
  
    },
  ]




  export const authorsData = [
    {id:1, avatar:Avatar1, name: 'Edwin Biwott', posts: 3},
    {id:2, avatar:Avatar2, name: 'Maquinn Ernest', posts: 0},
    {id:3, avatar:Avatar3, name: 'Edwin Eisenhower', posts: 30},
    {id:4, avatar:Avatar4, name: 'Jane Doe', posts: 1},
    {id:5, avatar:Avatar5, name: 'Mirriam Kakuzi', posts: 9}
  ]

  export const POST_CATEGORIES = [
    "Agriculture", "Business", "Technology", "Education", "Entertainment", "Art", "Uncategorized"
  ]


  export const formats = [
    'header',
    'bold', 'italic', 'undeline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'link', 'image'
  ]


  export const modules = {
    toolbar:[
      [{'header' : [1,2,3,4,5,6,false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list':'ordered'}, {'list':'bullet'}, {'indent':'-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

// // Importing depedancies and modules
// import React from "react";
// import ReactDom from "react-dom";

// // Importing all css modules
// import "./styles/style_global.css";
// import "./styles/style_user_item.css";
// import "./styles/style_conversation.css";

// // Building User item
// const UserItem = (props) => {
//   return (
//     <div className="user-item">
//       <div className="avatar"></div>
//       <div className="content">
//         <p className="name">{props.name}</p>
//         <p className="msg">{props.message}</p>
//         <p className="heure">{props.heure}</p>
//       </div>
//     </div>
//   );
// };

// // Building gest Message
// const GestMessage = () => {
//   return (
//     <div className="msg-in">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     </div>
//   );
// };

// // Building my message
// const MyMessage = () => {
//   return (
//     <div className="msg-out">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//     </div>
//   );
// };

// // Building text
// const CustomText = () => {
//   return (
//     <p className="test-2">
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
//       aspernatur officiis, ipsum quae similique, veniam magnam voluptatem,
//       doloribus atque fuga autem facilis nulla minima ad. Aperiam inventore illo
//       aliquid? Facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       Accusamus earum iste temporibus dignissimos aliquam fugiat! Dolorem ullam,
//       ea nihil fugiat, suscipit hic laborum voluptatibus odio quibusdam ab
//       necessitatibus praesentium minima. Lorem ipsum dolor sit amet consectetur
//       adipisicing elit. Dolor natus velit soluta nulla aliquid tenetur cum ad
//       autem porro quam facere vel mollitia nihil, ut ea itaque, saepe minima
//       modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
//       adipisci accusamus, facilis asperiores pariatur in inventore voluptatem
//       dignissimos rerum molestias possimus. Maxime eum repudiandae ratione. Hic
//       harum vero ipsum iusto. Lorem ipsum dolor sit amet consectetur adipisicing
//       elit. Enim, itaque debitis architecto, tenetur dicta molestiae accusantium
//       amet cumque fuga exercitationem magni quas neque! Porro non temporibus
//       sequi, laboriosam provident cupiditate? Lorem ipsum dolor sit amet
//       consectetur adipisicing elit. Aut eum eos adipisci illo quaerat inventore
//       saepe cupiditate officiis libero iure earum accusantium, unde ratione nemo
//       velit in sequi rem neque? Lorem ipsum dolor, sit amet consectetur
//       adipisicing elit. At harum necessitatibus exercitationem natus enim
//       asperiores vitae, iure reprehenderit perspiciatis cum vel, consequatur
//       aliquam minus est nostrum iusto inventore neque nisi? Lorem ipsum, dolor
//       sit amet consectetur adipisicing elit. Voluptatibus, unde officiis aperiam
//       dolore fugit delectus excepturi id quasi minima molestiae! Aperiam
//       accusantium voluptates est velit, modi veniam amet suscipit repellat?
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa
//       aspernatur architecto consequuntur quaerat laborum odit repellendus, nemo
//       ex eius. Totam aperiam labore delectus incidunt nostrum animi officia
//       facere nisi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//       Fuga repudiandae omnis debitis dolores, vel modi repellat quo pariatur
//       quos, quasi praesentium repellendus eos! Natus cum officiis aspernatur
//       modi laudantium aliquid! Lorem ipsum dolor sit amet consectetur,
//       adipisicing elit. Commodi aspernatur officiis, ipsum quae similique,
//       veniam magnam voluptatem, doloribus atque fuga autem facilis nulla minima
//       ad. Aperiam inventore illo aliquid? Facilis! Lorem ipsum dolor sit amet
//       consectetur adipisicing elit. Accusamus earum iste temporibus dignissimos
//       aliquam fugiat! Dolorem ullam, ea nihil fugiat, suscipit hic laborum
//       voluptatibus odio quibusdam ab necessitatibus praesentium minima. Lorem
//       ipsum dolor sit amet consectetur adipisicing elit. Dolor natus velit
//       soluta nulla aliquid tenetur cum ad autem porro quam facere vel mollitia
//       nihil, ut ea itaque, saepe minima modi. Lorem ipsum, dolor sit amet
//       consectetur adipisicing elit. Vero adipisci accusamus, facilis asperiores
//       pariatur in inventore voluptatem dignissimos rerum molestias possimus.
//       Maxime eum repudiandae ratione. Hic harum vero ipsum iusto. Lorem ipsum
//       dolor sit amet consectetur adipisicing elit. Enim, itaque debitis
//       architecto, tenetur dicta molestiae accusantium amet cumque fuga
//       exercitationem magni quas neque! Porro non temporibus sequi, laboriosam
//       provident cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing
//       elit. Aut eum eos adipisci illo quaerat inventore saepe cupiditate
//       officiis libero iure earum accusantium, unde ratione nemo velit in sequi
//       rem neque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
//       harum necessitatibus exercitationem natus enim asperiores vitae, iure
//       reprehenderit perspiciatis cum vel, consequatur aliquam minus est nostrum
//       iusto inventore neque nisi? Lorem ipsum, dolor sit amet consectetur
//       adipisicing elit. Voluptatibus, unde officiis aperiam dolore fugit
//       delectus excepturi id quasi minima molestiae! Aperiam accusantium
//       voluptates est velit, modi veniam amet suscipit repellat? Lorem ipsum
//       dolor sit amet consectetur adipisicing elit. Nostrum ipsa aspernatur
//       architecto consequuntur quaerat laborum odit repellendus, nemo ex eius.
//       Totam aperiam labore delectus incidunt nostrum animi officia facere nisi.
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga repudiandae
//       omnis debitis dolores, vel modi repellat quo pariatur quos, quasi
//       praesentium repellendus eos! Natus cum officiis aspernatur modi laudantium
//       aliquid!
//     </p>
//   );
// };

// // Building components
// const Wrapper = () => {
//   return (
//     <article className="wrapper">
//       <div className="container-n">
//         <UserItem
//           name="Optimus ged"
//           message="Slt big bro ! hier t'es pas venu why ?"
//           heure="08:25"
//         />
//         <UserItem
//           name="Salem Nzolani"
//           message="Je me demande si demain on a cours !"
//           heure="10:22"
//         />
//         <UserItem
//           name="John Kuhanda"
//           message="Hier soir on etait ensemble"
//           heure="15:14"
//         />
//         <UserItem
//           name="Adele Bash"
//           message="J'en ai fini avec ce TAF"
//           heure="07:53"
//         />
//         <UserItem
//           name="Sisi Bashwira"
//           message="Demain je serai en ville et toi ?"
//           heure="11:32"
//         />
//         <h1 className="test">Optimus Tec</h1>
//         <CustomText />
//       </div>
//       <div className="container">
//         <GestMessage />
//         <div className="space-between"></div>
//         <MyMessage />
//         <div className="space-between"></div>
//         <GestMessage />
//         <div className="space-between"></div>
//         <MyMessage />
//         <div className="space-between"></div>
//       </div>
//     </article>
//   );
// };

// // Exporting modules
// ReactDom.render(<Wrapper />, document.getElementById("root"));



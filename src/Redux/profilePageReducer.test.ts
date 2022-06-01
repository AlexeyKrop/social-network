import {v1} from "uuid";
import {ADD_POST, profilePageReducer, UPDATE_WORDS_IN_POST} from "./profilePageReducer";

// test('check add post', () => {
//   let startState = {
//     messages: [
//       {
//         user_name: "Julie R. Morley",
//         message: 'Done rut con leo ege males. Nella quits lorem ut libero dalesman fugitive. Done rut-rum tongue leo wget dalesman. Done rut-rum tongue leo wget dalesman. Present sapien massa convallis a pellentesque nec egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis.',
//         countLike: 5,
//         src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-2.jpg',
//         id: v1(),
//       },
//       {
//         user_name: "Herta Smith",
//         message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugiat labore nulla placeat reiciendis. A asperiores dignissimos illo libero, magnam natus, nostrum qui quibusdam rem saepe sint tempora totam voluptatibus! Ad at cum cumque doloremque ducimus eos eum exercitationem expedita id illum ipsa, ipsum iure minus nisi       odio officia quas quod recusandae saepe sunt, veritatis voluptates voluptatibus? Fugiat, laudantium',
//         countLike: 8,
//         src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-11.jpg',
//         id: v1(),
//       },
//     ],
//     updatePostInProfile: '',
//   }
//   const endState = profilePageReducer(startState, {
//     type: ADD_POST,
//     newEl: 'add post for test'
//   })
//   expect(endState.messages[0].message).toBe('add post for test')
//   expect(endState.messages.length).toBe(3)
// })
// test('check update words in post', () => {
//   let startState = {
//     messages: [
//       {
//         user_name: "Julie R. Morley",
//         message: 'Done rut con leo ege males. Nella quits lorem ut libero dalesman fugitive. Done rut-rum tongue leo wget dalesman. Done rut-rum tongue leo wget dalesman. Present sapien massa convallis a pellentesque nec egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis.',
//         countLike: 5,
//         src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-2.jpg',
//         id: v1(),
//       },
//       {
//         user_name: "Herta Smith",
//         message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugiat labore nulla placeat reiciendis. A asperiores dignissimos illo libero, magnam natus, nostrum qui quibusdam rem saepe sint tempora totam voluptatibus! Ad at cum cumque doloremque ducimus eos eum exercitationem expedita id illum ipsa, ipsum iure minus nisi       odio officia quas quod recusandae saepe sunt, veritatis voluptates voluptatibus? Fugiat, laudantium',
//         countLike: 8,
//         src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-11.jpg',
//         id: v1(),
//       },
//     ],
//     updatePostInProfile: '',
//   }
//   const action = {
//     type: UPDATE_WORDS_IN_POST,
//     updateWords: 'U'
//   }
//   const endState = profilePageReducer(startState, {
//     type: UPDATE_WORDS_IN_POST,
//     newWords: 'U'
//   })
//   expect(endState.updatePostInProfile).toBe('U')
// })
import NextAuth from "next-auth"
import Credentials from 'next-auth/providers/credentials'
import axios from "axios"

export default NextAuth({

  providers: [
    Credentials({
      name: "Strapi",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email@ejemplo.com" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        console.log(credentials)
        const url = "http://localhost:1337/api/auth/local"
        const response = await axios.post(url, {
          "identifier": credentials.email,
          "password": credentials.password
        })



        if (response.data) {
          return console.log(response.data)
        }
        else {
          return null;
        }
      }
    })
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session: ({ session, token }) => {
      if (user) {
        session.id = token.id
      }
      return session
    },
  },

  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
})
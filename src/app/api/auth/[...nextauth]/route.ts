import NextAuth, { Profile } from "next-auth"
import { OAuthConfig } from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })as OAuthConfig<Profile>,
      ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
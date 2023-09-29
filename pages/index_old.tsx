import { SignIn, SignedIn, SignedOut } from "@clerk/remix";
import { createClerkClient } from "@clerk/remix/api.server";
import { getAuth } from "@clerk/remix/ssr.server";
import { ActionFunction, LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getSupabase } from 'utils/supabase.server';


const dbErrorMessage =
  'Something is missing.<br/>Did you set up Supabase yet?<br/>You can find the <a href="https://github.com/clerkinc/remix-bossa-nova-stack#configuring-the-database" target="_blank">instructions in the README file</a>.';;

const ClerkFeatures = () => (
  <Link to="/user" className="cardContent">
    <img src="/icons/layout.svg" />
    <div>
      <h3>Explore features provided by Clerk</h3>
      <p>Interact with the user button, user profile, and more to preview what your users will see</p>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const SsrDemoLink = () => (
  <Link to="/ssr-demo" className="cardContent">
    <img src="/icons/layout.svg" />
    <div>
      <h3>Visit the SSR demo page</h3>
      <p>
        See how Clerk hydrates the auth state during SSR and CSR, enabling server-side generation even for
        authenticated pages
      </p>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

const SignupLink = () => (
  <Link to="/sign-up" className="cardContent">
    <img src="/icons/user-plus.svg" />
    <div>
      <h3>Sign up for an account</h3>
      <p>Sign up and sign in to explore all the features provided by Clerk out-of-the-box</p>
    </div>
    <div className="arrow">
      <img src="/icons/arrow-right.svg" />
    </div>
  </Link>
);

export const loader: LoaderFunction = async (request) => {
  const { userId } = await getAuth(request)
  if (!userId) return null

  const db = await getSupabase(request)
  if (!db) {
    return json({ error: dbErrorMessage })
  }

  const user = await createClerkClient({secretKey: process.env.CLERK_SECRET_KEY}).users.getUser(userId);

  const { data } = await db.from('bossa_nova_songs').select()
  await db.from('bossa_nova_songs').select().then((res) => console.log(res))
  console.log('DATA', data);

  if (!data) {
    return json({ error: dbErrorMessage })
  }

  return json({ songs: data, user: user || {}  })
}

export const action: ActionFunction = async (req) => {
  const formData = await req.request.formData();
  const { userId } = await getAuth(req)

  const song = formData.get('add-song')

  const db = await getSupabase(req)
  if (!db) return null

  await db.from('bossa_nova_songs').insert({ body: song, user_id: userId })
  return null
}

// Main component using <SignedIn> and <SignedOut>
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
const Main = () => {
  const data = useLoaderData();

  return (
    <main className="main">
      <h1 className="title">Welcome to your new app</h1>
      <SignedIn>
        <p className="description">You have successfully signed in</p>
      </SignedIn>
      <SignedOut>
        <p className="description">Sign up for an account to get started</p>
      </SignedOut>

      {

      }

      {data?.error && (
        <p className='text-lg text-red-400'><u>{data.error}</u></p>
        )
      }

      {Boolean(data?.songs) && (
        <>
          <h3>SONGS</h3>
          {
            data.songs.map((song: any) => (
              <p className='text-lg text-green-400' key={song.id}>{song.body}</p>
            ))
          }
        </>
      )}

      <div className="cards">
        <SignedIn>
          <div className="card">
            <ClerkFeatures />
          </div>
        </SignedIn>
        <SignedIn>
          <div className="card">
            <SsrDemoLink />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="card">
            <SignupLink />
          </div>
        </SignedOut>
        <div className="card">
          <a href="https://dashboard.clerk.dev/last-active?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_starter" target="_blank" rel="noreferrer" className="cardContent">
            <img src="/icons/settings.svg" />
            <div>
              <h3>Configure settings for your app</h3>
              <p>Visit Clerk to manage instances and configure settings for user management, theme, and more</p>
            </div>
            <div className="arrow">
              <img src="/icons/arrow-right.svg" />
            </div>
          </a>
        </div>
      </div>

      <div className="links">
        <a href="https://clerk.dev/docs?utm_source=github&utm_medium=starter_repos&utm_campaign=remix_starter" target="_blank" rel="noreferrer" className="link">
          <span className="linkText">Read Clerk documentation</span>
        </a>
        <a href="https://remixjs.org/docs" target="_blank" rel="noreferrer" className="link">
          <span className="linkText">Read Remix documentation</span>
        </a>
      </div>
    </main>
    
  )
}

const Footer = () => {

  const data = useLoaderData();

  return (
    <footer className="flex flex-row w-full justify-around m-4">
      <div className='w-20'>
        <a href="https://github.com/clerkinc/clerk-remix-starter" target="_blank" rel="noopener noreferrer">
          Powered by <img src="/clerk.svg" alt="Clerk.dev" className="footer-logo" />
          +
          <img src="/remix.svg" alt="Remix" className="footer-logo-remix" />
        </a>
      </div>
      <div className='w-80 h-16 rounded-3xl drop-shadow-md flex'>
        {Boolean(data?.user) && (
          <div className='w-11/12 h-20 mx-auto mb-4 grid grid-rows-2 bg-slate-50 p-3 rounded drop-shadow-md'>
              <div className='flex flex-row justify-between items-center'>
                  <img src={data.user?.profileImageUrl ?? ''} id='userLogo'/>
                  <p className='text-center'>{data.user?.firstName} {data.user?.lastName}</p>
                  <p>L2</p>
              </div>
              <div className='flex flex-row items-center justify-between'>
                  <div className='w-5/6 items-center'>
                      {/* <LinearProgress variant="determinate" value={50} /> */}
                  </div>
                  <p className='text-xs ml-2'>50/100</p>
              </div>
          </div>
        )}
      </div>
    </footer>
  )
};

export default function Index() {
  const data = useLoaderData();
  
  return (
    <div className="container">
      <SignedIn>
        <Main />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
      <Footer />
    </div>
  );
}

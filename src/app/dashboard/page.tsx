"use client"
// import { useSession } from 'next-auth/react';
// import { ReactElement } from 'react';

const DashboardPage = () => {

  // const { data: session, status} = useSession()
  // console.log({session, status})
  // if ( status === 'loading') {
  //   return <p>Loading...</p>
  // }

  // const getBrands = async() => {
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/brands`,{
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Bearer ${session?.user.token}`
  //     }
  //   })
  //   const data = await res.json()
  //   console.log(data)
  // }
  // <pre>
  //       <code>{JSON.stringify(session, null, 2)}</code>
  // </pre>

  return (
    <div>
      <div>DashboardPage</div>
    </div>
  )
}

export default DashboardPage;
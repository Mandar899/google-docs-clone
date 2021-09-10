import TextEditor from '../../components/TextEditor';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/router';
import { db } from '../../firebase';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { getSession, useSession } from 'next-auth/client';
import Login from '../../components/Login';

function Doc() {
  const [session] = useSession();

  // Getting id from the router
  const router = useRouter();
  const { id } = router.query;

  // Accessing the doc from firebase using the id from the router
  const [snapshot, loadingSnapshot] = useDocumentOnce(
    db.collection('userDocs').doc(session.user.email).collection('docs').doc(id)
  );

  if (!session) return <Login />;
  // Redirects the user if user tries to access a URL which they do not have access to..
  if (!loadingSnapshot && !snapshot?.data()?.fileName) {
    router.replace('/');
  }

  return (
    <div>
      <header className='flex justify-between items-center p-3 pb-1'>
        {/* logo */}
        <span className='cursor-pointer' onClick={() => router.push('/')}>
          <Icon name='description' size='5xl' color='blue' />
        </span>

        {/* document name  */}
        <div className='flex-grow px-2'>
          <h2 className=''>{snapshot?.data()?.fileName}</h2>

          <div className='flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600'>
            <p className='option'>File</p>
            <p className='option'>Edit</p>
            <p className='option'>View</p>
            <p className='option'>Insert</p>
            <p className='option'>Format</p>
            <p className='option'>Tools</p>
          </div>
        </div>
        <Button
          color='lightBlue'
          buttonType='filled'
          size='regular'
          className='hidden md:flex h-10'
          rounded={false}
          block={false}
          iconOnly={false}
          ripple='light'
        >
          <Icon name='people' size='md' /> SHARE
        </Button>

        <img
          className='h-10 w-10 rounded-full cursor-pointer ml-2'
          src={session.user.image}
          alt='profile'
        />
      </header>

      {/* Text editor */}
      <TextEditor />
    </div>
  );
}

export default Doc;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}

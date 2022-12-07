import React from 'react';
import {Text} from 'react-native';

const StudentSide = React.lazy(
  () => import(/* webpackChunkName: "student" */ './StudentSide'),
);

const TeacherSide = React.lazy(
  () => import(/* webpackChunkName: "teacher" */ './TeacherSide'),
);

function Home({user}: any) {
  const Side = React.useMemo(
    () =>
      user.role === 'student' ? (
        <StudentSide user={user} />
      ) : (
        <TeacherSide user={user} />
      ),
    [user],
  );

  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>{Side}</React.Suspense>
  );
}

export default function App() {
  return <Home user={{role: 'teacher'}} />;
}

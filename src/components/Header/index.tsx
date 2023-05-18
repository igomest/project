// import './index.less';

// import * as React from 'react';


// import { L } from '../../lib/abpUtility';

// import profilePicture from '../../images/user.png';
// import AuthenticationStore from '../../stores/authenticationStore';


// export interface IHeaderProps {
//   collapsed?: any;
//   toggle?: any;
//   authenticationStore: AuthenticationStore;
// }

// const Header = ({ collapsed, toggle, authenticationStore }: IHeaderProps) => {

//   const handleLogout = () => {
//     try{
//       authenticationStore!.logout()
//       window.location.replace('/user/login')
//     }
//     catch {
//       console.log('error')
//     };

//   };

//   const items: MenuProps['items'] = [
//     {
//       key: '1',
//       label: (
//         <Button type="link" danger onClick={handleLogout} icon={<LogoutOutlined />}>
//           <span> {L('Logout')}</span>
//         </Button>
//       ),
//     },
//   ];

//   return (
//     <Row className={'header-container'} justify="space-between">
//       <Col  span={12} style={{ padding: '0px 15px 0px 15px', textAlign: 'left' }}>
//         {collapsed ? (
//           <MenuUnfoldOutlined className="trigger" onClick={toggle} />
//         ) : (
//           <MenuFoldOutlined className="trigger" onClick={toggle} />
//         )}
//       </Col>
//       <Col style={{ padding: '0px 15px 0px 15px', textAlign: 'right' }} span={12}>
//         <Dropdown  menu={{ items }} trigger={['click']}>
//           <Badge >
//             <Avatar
//               style={{ height: 24, width: 24 }}
//               shape="circle"
//               alt={'profile'}
//               src={profilePicture}
//             />
//           </Badge>
//         </Dropdown>
//       </Col>
//     </Row>
//   );
// };

// export default Header;

const User = () => {
  return (
    <div>User</div>
  )
}

export default User;
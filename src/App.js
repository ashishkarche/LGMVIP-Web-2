/* ------- Task2 Completed, 
                            by Ashish Karche -------
*/					                            
import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  padding: 0 20px;
`;

const BrandName = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0069d9;
  }
`;

const Loader = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const UserCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const UserAvatar = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const UserName = styled.h3`
  margin: 10px 0 5px 0;
  font-size: 18px;
`;

const UserEmail = styled.p`
  margin: 0;
  font-size: 14px;
  color: #888;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
    const getUsers = async () => {
      setLoading(true);
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
  
  };

  return (
    <Container>
      <Navbar>
        <BrandName>User Data</BrandName>
        <Button onClick={getUsers}>Get Users</Button>
      </Navbar>
      {loading ? (
        <Loader />
      ) : (
        <CardGrid>
          {users.map((user) => (
            <UserCard key={user.id}>
              <UserAvatar src={user.avatar} alt="avatar" />
              <UserName>{`${user.first_name} ${user.last_name}`}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserCard>
          ))}
        </CardGrid>
        )}
    </Container>
  );
}

export default App;

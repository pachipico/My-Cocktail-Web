/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Content = styled.View`
  flex: 1;
  padding: 24px;
`;
const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #e5e5e5;
  justify-content: center;
  align-items: center;
`;
const Quiz = styled.Text`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;
const Label = styled.Text`
  font-size: 18px;
`;

const App: () => Node = () => {
  return (
    <>
      <Container>
        <Content>
          <Quiz>ㅂㄷ</Quiz>
        </Content>

        <Button>
          <Label>확인</Label>
        </Button>
      </Container>
    </>
  );
};

export default App;

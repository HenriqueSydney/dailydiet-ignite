import { Button } from "@components/Button";
import { ButtonTypeStyleProps } from "@components/Button/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Modal, ModalBaseProps, Platform, Pressable, StyleSheet } from "react-native";
import { ButtonContainer, Container, Content, Title, TitleContainer } from "./styles"
type ButtonProps = {
    title: string;
    type?: ButtonTypeStyleProps;
    icon?: ''  |  keyof typeof MaterialIcons.glyphMap;
    onPress: 'cancel' | (() => void);
}

type Props = ModalBaseProps & {
    modalAlertVisible: boolean;
    setModalAlertVisible: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    buttons: ButtonProps[];
}

export function AlertModal({ modalAlertVisible, setModalAlertVisible, title, buttons, ...rest}: Props){

    return(
        <Modal        
            animationType="fade"
            transparent={true}
            visible={modalAlertVisible}
            onRequestClose={() => {
                setModalAlertVisible(true);
            }}
            {...rest}
        >

            <Pressable 
                style={[Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop, styles.backdrop]} 
                onPress={() => setModalAlertVisible(false)} 
            />
            <Container>
                <Content>
                    <TitleContainer>
                        <Title>
                            {title}
                        </Title> 
                    </TitleContainer>
                    <ButtonContainer>
                        {buttons.map((button, index) => <Button 
                                                    style={{margin:5}}
                                                    key={button.title + index}
                                                    title={button.title}
                                                    type={button.type}
                                                    icon={button.icon}
                                                    onPress={button.onPress === 'cancel' ? () => setModalAlertVisible(false) : button.onPress}
                                                />
                        )}    
                    </ButtonContainer>               

                </Content>
            </Container>
        </Modal>
    );
}

const styles = StyleSheet.create({     
    iOSBackdrop: {
      backgroundColor: "#000000",
      opacity: 0.3
    },
    androidBackdrop: {
      backgroundColor: "#232f34",
      opacity: 0.32
    },
    backdrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
  });
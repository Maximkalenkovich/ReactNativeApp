import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";


export const InputComponent = () => {
const [valueInput, setValueInput] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={valueInput}
                    onChangeText={setValueInput}
                    style={styles.input}
                    placeholderTextColor="#999"
                />
            </View>
            <Button title={'Добавить'} style={styles.button}>
                добавить
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        fontFamily: 'Arial',
        color: '#333',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 8,
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 8,
    }
});
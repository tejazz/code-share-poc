import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { addTask, deleteTask } from './actions';

class MainList extends React.Component {
    state = {
        currentTask: ''
    };

    addTask = () => {
        let newTask = {
            id: new Date().getTime(),
            value: this.state.currentTask
        };

        this.props.addTask(newTask);
        this.setState({
            currentTask: ''
        });
    }

    handleInput = (val) => {
        this.setState({
            currentTask: val
        });
    }

    deleteTask(id) {
        console.log(id);
        this.props.deleteTask(id);
    }

    renderList = (item) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.value}</Text>
                <Button 
                    style={styles.itemBtn}
                    title="DELETE"
                    onPress={() => this.deleteTask(item.id)}
                />
            </View>
        );
    }

    render() {
        console.log(this.props.tasks);
        return (
            <View style={styles.container}>
                <Text style={styles.mainTitle}>Code Sharing POC</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputTag}
                        placeholder='Enter a new task'
                        onChangeText={this.handleInput}
                        value={this.state.currentTask}
                    />
                    <Button
                        style={styles.inputBtn}
                        title="ADD"
                        onPress={this.addTask}
                    />
                </View>
                <View>
                    {(!this.props.tasks) ? <Text>Fetching tasks...</Text> : ((this.props.tasks.length === 0) ? <Text>No tasks available</Text> : this.props.tasks.map((item) => this.renderList(item)))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputTag: {
        width: '70%',
        padding: 10
    },
    inputBtn: {
        width: '30%'
    },
    itemContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        marginLeft: 40
    },
    itemText: {
        width: '70%'
    },
    itemBtn: {
        width: '30%'
    }
});

function mapStateToProps(state) {
    return {
        tasks: state.tasks.tasks
    };
}

export default connect(mapStateToProps, { addTask, deleteTask })(MainList);
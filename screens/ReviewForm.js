import React from 'react'
import { View, TextInput, Button } from 'react-native'
import {globalStyles} from '../styles/global'

import {Formik} from 'formik'
import * as yup from 'yup'

const reviewSchema = yup.object({
    name: yup.string().required().min(4),
    email: yup.string().required().min(4),
    age: yup.string().required().test('is-age-18-65' , 'you must between 18 - 65', (val)=>{
        return parseInt(val) < 66 && parseInt(val) > 17;
    }),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 - 5', (val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0;
    }),

})

const ReviewForm = ({addReview}) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ name:'', age:'', email:'', rating:''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions)=>{
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) =>(
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Your Name"
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Your Age"
                            onChangeText={props.handleChange('age')}
                            value={props.values.age}
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Your Email"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1 - 5)"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType="numeric"
                        />
                        <Button
                            title="SUBMIT"
                            color="maroon"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm

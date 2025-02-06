import {z} from 'zod';

export const RegisterSchema = z.object({
	email: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	password: z.string().min(8, {
		message: "Password should be 8 character or more",
	}),
    name: z.string().min(5, {
        message: "Name should be 5 character or more",
    }),
    confirmPassword: z.string().min(8, {
        message: "Confirm Password should be 8 character or more",
    })
}).superRefine(( {confirmPassword, password}, ctx) => {
    if (confirmPassword !== password) {
        return ctx.addIssue({
            code: 'custom',
            message: 'Passwords do not match',
            path: ['confirmPassword']
        })
    }
});
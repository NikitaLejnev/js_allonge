// quasi-literal a.k.a. template string or string interpolation expression
// an expression which looks like a string literal
`foobar`
`fizz` + `buzz`

// they support interpolation or unquoting
// expressions are evaluated,
// their result is coerced to a string and then inserted in quasi-literal
`A popular number for nerds is ${40 + 2}`
// which is functionally the same as
"A popular number for nerds is " + (40 + 2)
// however, they resemble their result, so are easier to read and help us avoid errors
"A popular number for nerds is" + (40 + 2)
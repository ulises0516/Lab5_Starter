// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number "123-456-7890"', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('invalid phone number "123-456-ABCD"', () => {
  expect(isPhoneNumber("123-456-ABCD")).toBe(false);
});

test('valid phone number "800-123-4567"', () => {
  expect(isPhoneNumber("800-123-4567")).toBe(true);
});

test('invalid phone number "123-4D6-ABCD"', () => {
  expect(isPhoneNumber("123-456-ABCD")).toBe(false);
});

// Test should pass by correctly identifying a valid email with a hyphen in the domain
test('valid email "example2@domain.com"', () => {
  expect(isEmail("example2@domain.com")).toBe(true);
});

// Test should pass by correctly identifying a valid email with numbers in the domain and username
test('valid email "example12@domain.com"', () => {
  expect(isEmail("example12@domain.com")).toBe(true);
});

// Test should pass by correctly identifying an invalid email missing a domain
test('invalid email "username@"', () => {
  expect(isEmail("username@")).toBe(false);
});

// Test should pass by correctly identifying an invalid email with spaces
test('invalid email "user name@example.com"', () => {
  expect(isEmail("user name@example.com")).toBe(false);
});

test('strong password "Abcd1234"', () => {
  expect(isStrongPassword("Abcd1234")).toBe(true);
});

test('strong password "Aabcd1234"', () => {
  expect(isStrongPassword("Aabcd1234")).toBe(true);
});

test('invalid password starting with a number "1abcd"', () => {
  expect(isStrongPassword("1abcd")).toBe(false);
});
test('invalid password starting with a number "2abcd"', () => {
  expect(isStrongPassword("2abcd")).toBe(false);
});
test('valid date "12/31/2020"', () => {
  expect(isDate("12/31/2020")).toBe(true);
});

test('valid date "10/31/2020"', () => {
  expect(isDate("10/31/2020")).toBe(true);
});
test('invalid date with wrong year "12/31/20"', () => {
  expect(isDate("12/31/20")).toBe(false);
});
test('invalid date with wrong year "11/31/20"', () => {
  expect(isDate("11/31/20")).toBe(false);
});
test('valid hex color "#1a2b3c"', () => {
  expect(isHexColor("#1a2b3c")).toBe(true);
});
test('valid hex color "#2a2b3c"', () => {
  expect(isHexColor("#2a2b3c")).toBe(true);
});

test('invalid hex color with 5 characters "#12345"', () => {
  expect(isHexColor("#12345")).toBe(false);
});
test('invalid hex color with 5 characters "#12335"', () => {
  expect(isHexColor("#12335")).toBe(false);
});

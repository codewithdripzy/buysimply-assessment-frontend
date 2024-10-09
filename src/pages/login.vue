<script setup lang="ts">
    import "../css/login.css";
    import Logo from "../assets/icons/logo.png";
    import PeopleImage from "../assets/images/people.png";
import { ref } from "vue";

    const showPassword = ref(false);

    const togglePassword = () => {
        showPassword.value = !showPassword.value;
    };
</script>

<template>
    <div class="login-container">
        <div class="login-carousel">
            <div class="logo-container">
                <img :src="Logo" alt="Logo">
            </div>
            <div class="image-container">
                <img :src="PeopleImage" alt="Logo">
            </div>
            <div class="carousel-footer">
                <div class="carousel-footer-title">Team Achieve</div>
                <span class="carousel-footer-description">Your perfect solution for funding your  desires</span>
            </div>
        </div>
        <form class="login-form">
            <div class="form-logo">
                <img :src="Logo" alt="Logo">
            </div>
            <div class="form-heading">
                <div class="form-title">Welcome Back</div>
                <span class="form-caption">Enter your email address and password to access your account.</span>
            </div>
            <div class="form-content">
                <div class="input-container">
                    <label for="email">Email Address <sup class="required-tag">*</sup></label>
                    <input type="email" name="email" id="email" placeholder="Enter your email">
                </div>
                <div class="input-container">
                    <label for="password">Password <sup class="required-tag">*</sup></label>
                    <div class="password-container">
                        <input :type="showPassword ? 'text' : 'password'" name="password" id="password" placeholder="Enter your password">
                        <div class="password-toggle" @click="togglePassword">
                            <div v-if="!showPassword">
                                <v-icon name="fa-eye-slash" />
                            </div>
                            <div v-else>
                                <v-icon name="fa-eye" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-meta">
                <div class="remember">
                    <input type="checkbox" name="remember" id="remember">
                    <label for="remember">Remember me</label>
                </div>
                <div class="forgot-psw">
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
            <div class="form-button">
                <button type="submit">
                    <span>Sign in</span>
                </button>
                <div class="alt-option">
                    <span>Don't have an account</span>
                    <a href="#">Sign up</a>
                </div>
            </div>
        </form>
    </div>
</template>
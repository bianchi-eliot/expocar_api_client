<template>
    <div class="user loginBx">
        <div class="imgBx">
            <img src="../../assets/jpg/lock.jpg" alt="Log In image">
        </div>
        <div class="formBx">
            <form @submit.stop>
                <h3 class="form-title">Log In</h3>
                <input type="text" name="email" placeholder="Email">
                <input type="password" name="mot_de_passe" placeholder="Password">
                <input type="submit" value="Log In">
                <p class="login">No account ?</p>
                <a class="change-btn" @click="$emit('toggleActive')">Sign In</a>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogInComponent'
}
</script>

<style>

</style>
<template>
    <div class="user signinBx">
        <div class="formBx">
            <form @submit.stop>
                <h3 class="form-title">Sign In</h3>
                <select name="fk_role_id_role">
                    <option value="0">Select your role</option>
                    <option value="1">Contractor</option>
                </select>
                <select name="fk_activite_id_activite">
                    <option value="0">Select your activity</option>
                    <option value="1">Convention</option>
                </select>
                <select name="fk_marque_id_marque">
                    <option value="0">Select your society</option>
                    <option value="1">Audi</option>
                </select>

                <input type="text" name="nom" placeholder="Last name">
                <input type="text" name="prenom" placeholder="First name">
                <input type="text" name="email" placeholder="Email">
                <input type="password" name="mot_de_passe" placeholder="Password">
                <input type="password" name="mot_de_passe_confirmation" placeholder="Password-confirm">
            
                <input type="submit" value="Sign In">
                <p class="signin">Already have an account ?</p> 
                <a class="change-btn" @click="$emit('toggleActive')">Log In</a>
            </form>
        </div>
        <div class="imgBx">
            <img src="../../assets/jpg/keys.jpg" alt="Sign In image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignInComponent'
}
</script>

<style>

</style>
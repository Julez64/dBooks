module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    compass: true,
                    style: 'expanded'
                },
                files: {
                    './public/stylesheets/style.css':'./dev/sass/styles.scss'
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    './public/stylesheets/style.min.css':'./public/stylesheets/style.css'
                }
            }
        },

        watch: {
            sass: {
                files: ['./dev/sass/*.scss'],
                tasks: ['sass']
            },
            styles: {
                files: ['./public/stylesheets/style.css'],
                tasks: ['cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'cssmin']);
};